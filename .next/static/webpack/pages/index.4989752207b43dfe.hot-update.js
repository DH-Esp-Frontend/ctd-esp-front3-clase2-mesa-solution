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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Home = function(param) {\n    var beers = param.beers;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Blog\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            (beers === null || beers === void 0 ? void 0 : beers.results.length) ? beers === null || beers === void 0 ? void 0 : beers.results.map(function(n) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/character/\".concat(n.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"ListName\",\n                        children: n.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 15\n                    }, _this1)\n                }, n.id, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, _this1);\n            }) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDNkI7QUFrQjdCLElBQU1DLElBQUksR0FBcUIsZ0JBQVk7UUFBVkMsS0FBSyxTQUFMQSxLQUFLOztJQUVwQyxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsTUFBSTs7Ozs7cUJBQUs7WUFDWkYsQ0FBQUEsS0FBSyxhQUFMQSxLQUFLLFdBQVMsR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxLQUFLLENBQUVHLE9BQU8sQ0FBQ0MsTUFBTSxJQUNsQkosS0FBSyxhQUFMQSxLQUFLLFdBQVMsR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxLQUFLLENBQUVHLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLFNBQUNDLENBQUM7cUNBQ25CLDhEQUFDUixrREFBSTtvQkFBQ1MsSUFBSSxFQUFFLGFBQVksQ0FBTyxPQUFMRCxDQUFDLENBQUNFLEVBQUUsQ0FBRTs4QkFDOUIsNEVBQUNDLEdBQUM7d0JBQUNDLFNBQVMsRUFBQyxVQUFVO2tDQUFFSixDQUFDLENBQUNLLElBQUk7Ozs7OzhCQUFLO21CQURDTCxDQUFDLENBQUNFLEVBQUU7Ozs7MEJBRXBDO2FBQ1IsQ0FBQyxHQUNGLElBQUk7Ozs7OzthQUNKLENBQ047Q0FDSDtBQWRLVCxLQUFBQSxJQUFJOztBQTJCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmludGVyZmFjZSBDaGFyYWN0ZXJze1xyXG4gIHJlc3VsdHM6Q2hhcmFjdGVyXHJcbn1cclxuIGludGVyZmFjZSBDaGFyYWN0ZXIge1xyXG4gICAgIGlkOiBudW1iZXI7XHJcbiAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgaW1hZ2VfdXJsOiBzdHJpbmc7XHJcbiAgIFxyXG4gfVxyXG5pbnRlcmZhY2UgUHJvcHN7XHJcbiAgY2hhcmFjdGVyczogQ2hhcmFjdGVyc1tdXHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgOiBOZXh0UGFnZTxQcm9wcz4gPSAoe2JlZXJzfSkgPT57XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+QmxvZzwvaDE+XHJcbiAgICAgIHtiZWVycz8ucmVzdWx0cy5sZW5ndGhcclxuICAgICAgICA/IGJlZXJzPy5yZXN1bHRzLm1hcCgobikgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYXJhY3Rlci8ke24uaWR9YH0ga2V5PXtuLmlkfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJMaXN0TmFtZVwiPntuLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYygpPT57XHJcbiAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvXCIpO1xyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgIHJldHVybntcclxuICAgIHByb3BzOntcclxuICAgICAgYmVlcnM6IGRhdGFcclxuICAgIH1cclxuICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG4iXSwibmFtZXMiOlsiTGluayIsIkhvbWUiLCJiZWVycyIsImRpdiIsImgxIiwicmVzdWx0cyIsImxlbmd0aCIsIm1hcCIsIm4iLCJocmVmIiwiaWQiLCJwIiwiY2xhc3NOYW1lIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});