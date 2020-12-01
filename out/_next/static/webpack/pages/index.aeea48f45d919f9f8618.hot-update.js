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

  // Dynamic vars
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
    console.log(inkjs__WEBPACK_IMPORTED_MODULE_3__);
    fetch("story.json").then(function (response) {
      console.log(response);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwic3RvcnkiLCJzZXRTdG9yeSIsImdsb2JhbFRhZ3MiLCJzdG9yeUNvbnRhaW5lciIsInVzZVJlZiIsIm91dGVyU2Nyb2xsQ29udGFpbmVyIiwiY3VzdG9tQ29udGludWVTdG9yeSIsImNhbkNvbnRpbnVlIiwiY29uc29sZSIsImxvZyIsIkNvbnRpbnVlIiwiY29udGludWVTdG9yeSIsImZpcnN0VGltZSIsInBhcmFncmFwaEluZGV4IiwiZGVsYXkiLCJwcmV2aW91c0JvdHRvbUVkZ2UiLCJjb250ZW50Qm90dG9tRWRnZVkiLCJwYXJhZ3JhcGhUZXh0IiwidGFncyIsImN1cnJlbnRUYWdzIiwiY3VzdG9tQ2xhc3NlcyIsImkiLCJsZW5ndGgiLCJ0YWciLCJzcGxpdFRhZyIsInNwbGl0UHJvcGVydHlUYWciLCJwcm9wZXJ0eSIsImltYWdlRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInZhbCIsImFwcGVuZENoaWxkIiwic2hvd0FmdGVyIiwicHVzaCIsInJlbW92ZUFsbCIsInNldFZpc2libGUiLCJyZXN0YXJ0IiwicGFyYWdyYXBoRWxlbWVudCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRDaG9pY2VzIiwiZm9yRWFjaCIsImNob2ljZSIsImNob2ljZVBhcmFncmFwaEVsZW1lbnQiLCJ0ZXh0IiwiY2hvaWNlQW5jaG9yRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJDaG9vc2VDaG9pY2VJbmRleCIsImluZGV4Iiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxEb3duIiwiUmVzZXRTdGF0ZSIsInNjcm9sbFRvIiwiZWwiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidGFyZ2V0IiwibGltaXQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdGFydCIsInNjcm9sbFRvcCIsImRpc3QiLCJkdXJhdGlvbiIsInN0YXJ0VGltZSIsInN0ZXAiLCJ0aW1lIiwidCIsImxlcnAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJib3R0b21FbGVtZW50IiwibGFzdEVsZW1lbnRDaGlsZCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsInNlbGVjdG9yIiwiYWxsRWxlbWVudHMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ2aXNpYmxlIiwicHJvcGVydHlTcGxpdElkeCIsImluZGV4T2YiLCJzdWJzdHIiLCJ0cmltIiwidXNlRWZmZWN0IiwiaW5reSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RvcnlDb250ZW50IiwibmV3U3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRTNCO0FBRjJCLGtCQUdEQyxzREFBUSxDQUFDLElBQUQsQ0FIUDtBQUFBLE1BR3BCQyxLQUhvQjtBQUFBLE1BR2JDLFFBSGEsaUJBSzNCOzs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsSUFBakIsQ0FOMkIsQ0FRM0I7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQW5DOztBQUVBLE1BQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUM5QixRQUFJLFNBQVNOLEtBQVQsSUFBa0JBLEtBQUssQ0FBQ08sV0FBNUIsRUFBeUM7QUFDckNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQVQsV0FBSyxDQUFDVSxRQUFOO0FBQ0g7QUFDSixHQUxEOztBQU9BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFlO0FBRWpDLFFBQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUNBLFFBQUlD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Q0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFHSTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsV0FBRyxFQUFFSyxvQkFBckM7QUFBQSwrQkFDSTtBQUFLLFlBQUUsRUFBQyxPQUFSO0FBQWdCLGFBQUcsRUFBRUY7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIOztHQTVQdUJMLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWVlYTQ4ZjQ1ZDkxOWY5Zjg2MTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgKiBhcyBpbmt5IGZyb20gJ2lua2pzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIC8vIER5bmFtaWMgdmFyc1xuICAgIGNvbnN0IFtzdG9yeSwgc2V0U3RvcnldID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLyBTdGF0aWMgdmFyc1xuICAgIGxldCBnbG9iYWxUYWdzID0gbnVsbDtcblxuICAgIC8vIERPTSBlbGVtZW50c1xuICAgIGNvbnN0IHN0b3J5Q29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG91dGVyU2Nyb2xsQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgY3VzdG9tQ29udGludWVTdG9yeSA9ICgpID0+IHtcbiAgICAgICAgaWYgKG51bGwgIT09IHN0b3J5ICYmIHN0b3J5LmNhbkNvbnRpbnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbiBjb250aW51XCIpO1xuICAgICAgICAgICAgc3RvcnkuQ29udGludWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRpbnVlU3RvcnkgPSAoZmlyc3RUaW1lKSA9PiB7XG5cbiAgICAgICAgdmFyIHBhcmFncmFwaEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRlbGF5ID0gMC4wO1xuXG4gICAgICAgIC8vIERvbid0IG92ZXItc2Nyb2xsIHBhc3QgbmV3IGNvbnRlbnRcbiAgICAgICAgdmFyIHByZXZpb3VzQm90dG9tRWRnZSA9IGZpcnN0VGltZSA/IDAgOiBjb250ZW50Qm90dG9tRWRnZVkoKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBzdG9yeSB0ZXh0IC0gbG9vcCB0aHJvdWdoIGF2YWlsYWJsZSBjb250ZW50XG4gICAgICAgIHdoaWxlIChzdG9yeS5jYW5Db250aW51ZSkge1xuXG4gICAgICAgICAgICAvLyBHZXQgaW5rIHRvIGdlbmVyYXRlIHRoZSBuZXh0IHBhcmFncmFwaFxuICAgICAgICAgICAgdmFyIHBhcmFncmFwaFRleHQgPSBzdG9yeS5Db250aW51ZSgpO1xuICAgICAgICAgICAgdmFyIHRhZ3MgPSBzdG9yeS5jdXJyZW50VGFncztcblxuICAgICAgICAgICAgLy8gQW55IHNwZWNpYWwgdGFncyBpbmNsdWRlZCB3aXRoIHRoaXMgbGluZVxuICAgICAgICAgICAgdmFyIGN1c3RvbUNsYXNzZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0YWcgPSB0YWdzW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IHRhZ3Mgb2YgdGhlIGZvcm0gXCJYOiBZXCIuIEN1cnJlbnRseSB1c2VkIGZvciBJTUFHRSBhbmQgQ0xBU1MgYnV0IGNvdWxkIGJlXG4gICAgICAgICAgICAgICAgLy8gY3VzdG9taXNlZCB0byBiZSB1c2VkIGZvciBvdGhlciB0aGluZ3MgdG9vLlxuICAgICAgICAgICAgICAgIHZhciBzcGxpdFRhZyA9IHNwbGl0UHJvcGVydHlUYWcodGFnKTtcblxuICAgICAgICAgICAgICAgIC8vIElNQUdFOiBzcmNcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRUYWcgJiYgc3BsaXRUYWcucHJvcGVydHkgPT0gXCJJTUFHRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNwbGl0VGFnLnZhbDtcbiAgICAgICAgICAgICAgICAgICAgc3RvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIGltYWdlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5ICs9IDIwMC4wO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENMQVNTOiBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzcGxpdFRhZyAmJiBzcGxpdFRhZy5wcm9wZXJ0eSA9PSBcIkNMQVNTXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3Nlcy5wdXNoKHNwbGl0VGFnLnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ0xFQVIgLSByZW1vdmVzIGFsbCBleGlzdGluZyBjb250ZW50LlxuICAgICAgICAgICAgICAgIC8vIFJFU1RBUlQgLSBjbGVhcnMgZXZlcnl0aGluZyBhbmQgcmVzdGFydHMgdGhlIHN0b3J5IGZyb20gdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZyA9PSBcIkNMRUFSXCIgfHwgdGFnID09IFwiUkVTVEFSVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcInBcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbChcImltZ1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG91dCB0aGlzIGxpbmUgaWYgeW91IHdhbnQgdG8gbGVhdmUgdGhlIGhlYWRlciB2aXNpYmxlIHdoZW4gY2xlYXJpbmdcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShcIi5oZWFkZXJcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWcgPT0gXCJSRVNUQVJUXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBhcmFncmFwaCBlbGVtZW50IChpbml0aWFsbHkgaGlkZGVuKVxuICAgICAgICAgICAgdmFyIHBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmlubmVySFRNTCA9IHBhcmFncmFwaFRleHQ7XG4gICAgICAgICAgICBzdG9yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhZ3JhcGhFbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gQWRkIGFueSBjdXN0b20gY2xhc3NlcyBkZXJpdmVkIGZyb20gaW5rIHRhZ3NcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VzdG9tQ2xhc3Nlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmNsYXNzTGlzdC5hZGQoY3VzdG9tQ2xhc3Nlc1tpXSk7XG5cbiAgICAgICAgICAgIC8vIEZhZGUgaW4gcGFyYWdyYXBoIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgICAgICAgIHNob3dBZnRlcihkZWxheSwgcGFyYWdyYXBoRWxlbWVudCk7XG4gICAgICAgICAgICBkZWxheSArPSAyMDAuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBIVE1MIGNob2ljZXMgZnJvbSBpbmsgY2hvaWNlc1xuICAgICAgICBzdG9yeS5jdXJyZW50Q2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UpIHtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBhcmFncmFwaCB3aXRoIGFuY2hvciBlbGVtZW50XG4gICAgICAgICAgICB2YXIgY2hvaWNlUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNob2ljZVBhcmFncmFwaEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNob2ljZVwiKTtcbiAgICAgICAgICAgIGNob2ljZVBhcmFncmFwaEVsZW1lbnQuaW5uZXJIVE1MID0gYDxhIGhyZWY9JyMnPiR7Y2hvaWNlLnRleHR9PC9hPmBcbiAgICAgICAgICAgIHN0b3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNob2ljZVBhcmFncmFwaEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBGYWRlIGNob2ljZSBpbiBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIGNob2ljZVBhcmFncmFwaEVsZW1lbnQpO1xuICAgICAgICAgICAgZGVsYXkgKz0gMjAwLjA7XG5cbiAgICAgICAgICAgIC8vIENsaWNrIG9uIGNob2ljZVxuICAgICAgICAgICAgdmFyIGNob2ljZUFuY2hvckVsID0gY2hvaWNlUGFyYWdyYXBoRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVswXTtcbiAgICAgICAgICAgIGNob2ljZUFuY2hvckVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICAgICAgICAgIC8vIERvbid0IGZvbGxvdyA8YT4gbGlua1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGV4aXN0aW5nIGNob2ljZXNcbiAgICAgICAgICAgICAgICByZW1vdmVBbGwoXCJwLmNob2ljZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIFRlbGwgdGhlIHN0b3J5IHdoZXJlIHRvIGdvIG5leHRcbiAgICAgICAgICAgICAgICBzdG9yeS5DaG9vc2VDaG9pY2VJbmRleChjaG9pY2UuaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWFhbmQgbG9vcFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlU3RvcnkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFeHRlbmQgaGVpZ2h0IHRvIGZpdFxuICAgICAgICAvLyBXZSBkbyB0aGlzIG1hbnVhbGx5IHNvIHRoYXQgcmVtb3ZpbmcgZWxlbWVudHMgYW5kIGNyZWF0aW5nIG5ldyBvbmVzIGRvZXNuJ3RcbiAgICAgICAgLy8gY2F1c2UgdGhlIGhlaWdodCAoYW5kIHRoZXJlZm9yZSBzY3JvbGwpIHRvIGp1bXAgYmFja3dhcmRzIHRlbXBvcmFyaWx5LlxuICAgICAgICBzdG9yeUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBjb250ZW50Qm90dG9tRWRnZVkoKSArIFwicHhcIjtcblxuICAgICAgICBpZiAoIWZpcnN0VGltZSlcbiAgICAgICAgICAgIHNjcm9sbERvd24ocHJldmlvdXNCb3R0b21FZGdlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBzdG9yeS5SZXNldFN0YXRlKCk7XG5cbiAgICAgICAgc2V0VmlzaWJsZShcIi5oZWFkZXJcIiwgdHJ1ZSk7XG5cbiAgICAgICAgY29udGludWVTdG9yeSh0cnVlKTtcblxuICAgICAgICBvdXRlclNjcm9sbENvbnRhaW5lci5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG5cbiAgICAvLyBGYWRlcyBpbiBhbiBlbGVtZW50IGFmdGVyIGEgc3BlY2lmaWVkIGRlbGF5XG4gICAgY29uc3Qgc2hvd0FmdGVyID0gKGRlbGF5LCBlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIC8vIFNjcm9sbHMgdGhlIHBhZ2UgZG93biwgYnV0IG5vIGZ1cnRoZXIgdGhhbiB0aGUgYm90dG9tIGVkZ2Ugb2Ygd2hhdCB5b3UgY291bGRcbiAgICAvLyBzZWUgcHJldmlvdXNseSwgc28gaXQgZG9lc24ndCBnbyB0b28gZmFyLlxuICAgIGZ1bmN0aW9uIHNjcm9sbERvd24ocHJldmlvdXNCb3R0b21FZGdlKSB7XG5cbiAgICAgICAgLy8gTGluZSB1cCB0b3Agb2Ygc2NyZWVuIHdpdGggdGhlIGJvdHRvbSBvZiB3aGVyZSB0aGUgcHJldmlvdXMgY29udGVudCBlbmRlZFxuICAgICAgICB2YXIgdGFyZ2V0ID0gcHJldmlvdXNCb3R0b21FZGdlO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2FuJ3QgZ28gZnVydGhlciB0aGFuIHRoZSB2ZXJ5IGJvdHRvbSBvZiB0aGUgcGFnZVxuICAgICAgICB2YXIgbGltaXQgPSBvdXRlclNjcm9sbENvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSBvdXRlclNjcm9sbENvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmKCB0YXJnZXQgPiBsaW1pdCApIHRhcmdldCA9IGxpbWl0O1xuXG4gICAgICAgIHZhciBzdGFydCA9IG91dGVyU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcDtcblxuICAgICAgICB2YXIgZGlzdCA9IHRhcmdldCAtIHN0YXJ0O1xuICAgICAgICB2YXIgZHVyYXRpb24gPSAzMDAgKyAzMDAqZGlzdC8xMDA7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWUpIHtcbiAgICAgICAgICAgIGlmKCBzdGFydFRpbWUgPT0gbnVsbCApIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgICAgICB2YXIgdCA9ICh0aW1lLXN0YXJ0VGltZSkgLyBkdXJhdGlvbjtcbiAgICAgICAgICAgIHZhciBsZXJwID0gMyp0KnQgLSAyKnQqdCp0OyAvLyBlYXNlIGluL291dFxuICAgICAgICAgICAgb3V0ZXJTY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oMCwgKDEuMC1sZXJwKSpzdGFydCArIGxlcnAqdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmKCB0IDwgMSApIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuXG4gICAgLy8gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIGVuZCBvZiBhbGwgdGhlIHN0b3J5IGNvbnRlbnQsIHVzZWRcbiAgICAvLyBmb3IgZ3Jvd2luZyB0aGUgY29udGFpbmVyLCBhbmQgZGVjaWRpbmcgaG93IGZhciB0byBzY3JvbGwuXG4gICAgZnVuY3Rpb24gY29udGVudEJvdHRvbUVkZ2VZKCkge1xuICAgICAgICB2YXIgYm90dG9tRWxlbWVudCA9IHN0b3J5Q29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIHJldHVybiBib3R0b21FbGVtZW50ID8gYm90dG9tRWxlbWVudC5vZmZzZXRUb3AgKyBib3R0b21FbGVtZW50Lm9mZnNldEhlaWdodCA6IDA7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBlbGVtZW50cyB0aGF0IG1hdGNoIHRoZSBnaXZlbiBzZWxlY3Rvci4gVXNlZCBmb3IgcmVtb3ZpbmcgY2hvaWNlcyBhZnRlclxuICAgIC8vIHlvdSd2ZSBwaWNrZWQgb25lLCBhcyB3ZWxsIGFzIGZvciB0aGUgQ0xFQVIgYW5kIFJFU1RBUlQgdGFncy5cbiAgICBmdW5jdGlvbiByZW1vdmVBbGwoc2VsZWN0b3IpXG4gICAge1xuICAgICAgICB2YXIgYWxsRWxlbWVudHMgPSBzdG9yeUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8YWxsRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGFsbEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVc2VkIGZvciBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGhlYWRlciB3aGVuIHlvdSBDTEVBUiBvciBSRVNUQVJUIHRoZSBzdG9yeSByZXNwZWN0aXZlbHkuXG4gICAgZnVuY3Rpb24gc2V0VmlzaWJsZShzZWxlY3RvciwgdmlzaWJsZSlcbiAgICB7XG4gICAgICAgIHZhciBhbGxFbGVtZW50cyA9IHN0b3J5Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBmb3IodmFyIGk9MDsgaTxhbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVsID0gYWxsRWxlbWVudHNbaV07XG4gICAgICAgICAgICBpZiggIXZpc2libGUgKVxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhlbHBlciBmb3IgcGFyc2luZyBvdXQgdGFncyBvZiB0aGUgZm9ybTpcbiAgICAvLyAgIyBQUk9QRVJUWTogdmFsdWVcbiAgICAvLyBlLmcuIElNQUdFOiBzb3VyY2UgcGF0aFxuICAgIGZ1bmN0aW9uIHNwbGl0UHJvcGVydHlUYWcodGFnKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eVNwbGl0SWR4ID0gdGFnLmluZGV4T2YoXCI6XCIpO1xuICAgICAgICBpZiggcHJvcGVydHlTcGxpdElkeCAhPSBudWxsICkge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gdGFnLnN1YnN0cigwLCBwcm9wZXJ0eVNwbGl0SWR4KS50cmltKCk7XG4gICAgICAgICAgICB2YXIgdmFsID0gdGFnLnN1YnN0cihwcm9wZXJ0eVNwbGl0SWR4KzEpLnRyaW0oKTsgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICB2YWw6IHZhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlua3kpO1xuICAgICAgICBmZXRjaChcInN0b3J5Lmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzdG9yeUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdG9yeUNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdTdG9yeSA9IG5ldyBpbmt5LlN0b3J5KHN0b3J5Q29udGVudCk7XG4gICAgICAgICAgICAgICAgc2V0U3RvcnkobmV3U3RvcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSwgW10pXG5cbiAgICAvLyBBZnRlciBzdG9yeSBpcyBsb2FkZWRcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb250aW51ZVN0b3J5KCk7XG4gICAgfSwgW3N0b3J5XSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+RGF0aW5nIFNpbTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxoMT5EYXRpbmcgU2ltPC9oMT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJDb250YWluZXJcIiByZWY9e291dGVyU2Nyb2xsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN0b3J5XCIgcmVmPXtzdG9yeUNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9