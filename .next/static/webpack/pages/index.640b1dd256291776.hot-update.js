"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Home = function(param) {\n    var characters = param.characters;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Blog\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            (characters === null || characters === void 0 ? void 0 : characters.results.length) ? beers === null || beers === void 0 ? void 0 : beers.results.map(function(n) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/character/\".concat(n.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"ListName\",\n                        children: n.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 15\n                    }, _this1)\n                }, n.id, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, _this1);\n            }) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDNkI7QUFrQjdCLElBQU1DLElBQUksR0FBb0IsZ0JBQW9CO1FBQWpCQyxVQUFVLFNBQVZBLFVBQVU7O0lBQ3pDLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxNQUFJOzs7OztxQkFBSztZQUNaRixDQUFBQSxVQUFVLGFBQVZBLFVBQVUsV0FBUyxHQUFuQkEsS0FBQUEsQ0FBbUIsR0FBbkJBLFVBQVUsQ0FBRUcsT0FBTyxDQUFDQyxNQUFNLElBQ3ZCQyxLQUFLLGFBQUxBLEtBQUssV0FBUyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLEtBQUssQ0FBRUYsT0FBTyxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsQ0FBQztxQ0FDbkIsOERBQUNULGtEQUFJO29CQUFDVSxJQUFJLEVBQUUsYUFBWSxDQUFPLE9BQUxELENBQUMsQ0FBQ0UsRUFBRSxDQUFFOzhCQUM5Qiw0RUFBQ0MsR0FBQzt3QkFBQ0MsU0FBUyxFQUFDLFVBQVU7a0NBQUVKLENBQUMsQ0FBQ0ssSUFBSTs7Ozs7OEJBQUs7bUJBRENMLENBQUMsQ0FBQ0UsRUFBRTs7OzswQkFFcEM7YUFDUixDQUFDLEdBQ0YsSUFBSTs7Ozs7O2FBQ0osQ0FDTjtDQUNIO0FBYktWLEtBQUFBLElBQUk7O0FBMEJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIENoYXJhY3RlcnN7XHJcbiAgcmVzdWx0czpDaGFyYWN0ZXJcclxufVxyXG4gaW50ZXJmYWNlIENoYXJhY3RlciB7XHJcbiAgICAgaWQ6IG51bWJlcjtcclxuICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICBpbWFnZV91cmw6IHN0cmluZztcclxuICAgXHJcbiB9XHJcbmludGVyZmFjZSBQcm9wc3tcclxuICBjaGFyYWN0ZXJzOiBDaGFyYWN0ZXJzW11cclxufVxyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgY2hhcmFjdGVycyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5CbG9nPC9oMT5cclxuICAgICAge2NoYXJhY3RlcnM/LnJlc3VsdHMubGVuZ3RoXHJcbiAgICAgICAgPyBiZWVycz8ucmVzdWx0cy5tYXAoKG4pID0+IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFyYWN0ZXIvJHtuLmlkfWB9IGtleT17bi5pZH0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiTGlzdE5hbWVcIj57bi5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jKCk9PntcclxuICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9cIik7XHJcbiAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgcmV0dXJue1xyXG4gICAgcHJvcHM6e1xyXG4gICAgICBiZWVyczogZGF0YVxyXG4gICAgfVxyXG4gICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSG9tZSIsImNoYXJhY3RlcnMiLCJkaXYiLCJoMSIsInJlc3VsdHMiLCJsZW5ndGgiLCJiZWVycyIsIm1hcCIsIm4iLCJocmVmIiwiaWQiLCJwIiwiY2xhc3NOYW1lIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});