"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/character/[id]",{

/***/ "./pages/character/[id].tsx":
/*!**********************************!*\
  !*** ./pages/character/[id].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Character = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), character = ref[0], setCharcater = ref[1];\n    var ref1 = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(), id = ref1.query;\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, data;\n            return C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"https://rickandmortyapi.com/api/character/\".concat(id.id));\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.json();\n                    case 5:\n                        data = _ctx.sent;\n                        setCharcater8;\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: id.id\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(Character, \"pZQT/F0EsY7pp34sf1OmvpCh0Mc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Character;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\nvar _c;\n$RefreshReg$(_c, \"Character\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFyYWN0ZXIvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3dDO0FBQ0k7O0FBRzVDLElBQU1HLFNBQVMsR0FBRyxXQUFLOztJQUNyQixJQUFrQ0QsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBUjlDLFNBUW1CLEdBQWlCQSxHQUFVLEdBQTNCLEVBUm5CLFlBUWdDLEdBQUlBLEdBQVUsR0FBZDtJQUM5QixJQUFtQkYsSUFBVyxHQUFYQSxzREFBUyxFQUFFLEVBQXZCTSxFQUFRLEdBQUlOLElBQVcsQ0FBdkJNLEtBQUs7SUFFZCxJQUFNRSxTQUFTO21CQUFHLHlPQUFVO2dCQUNwQkMsR0FBRyxFQUNIQyxJQUFJOzs7OzsrQkFEUUMsS0FBSyxDQUFDLDRDQUEyQyxDQUFRLE9BQU5KLEVBQUUsQ0FBQ0EsRUFBRSxDQUFFLENBQUM7O3dCQUF2RUUsR0FBRyxZQUFvRTs7K0JBQzFEQSxHQUFHLENBQUNHLElBQUksRUFBRTs7d0JBQXZCRixJQUFJLFlBQW1CO3dCQUM3QkcsYUFBYTs7Ozs7O1NBQ2Q7d0JBSktMLFNBQVM7OztPQUlkO0lBRURQLGdEQUFTLENBQUMsV0FBSSxFQUViLEVBQUMsRUFBRSxDQUFDO0lBQ0gscUJBQ0UsOERBQUNhLEtBQUc7a0JBQUVQLEVBQUUsQ0FBQ0EsRUFBRTs7Ozs7YUFBTyxDQUNuQjtDQUNGO0dBaEJLSixTQUFTOztRQUVNSCxrREFBUzs7O0FBRnhCRyxLQUFBQSxTQUFTO0FBbUJmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyL1tpZF0udHN4PzgxMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZXRTdGF0aWNQcm9wcywgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBDaGFyYWN0ZXIgPSAoKSA9PntcclxuICBjb25zdCBbIGNoYXJhY3RlcixzZXRDaGFyY2F0ZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB7cXVlcnk6aWR9ID0gdXNlUm91dGVyKClcclxuXHJcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jKCkgPT57XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7aWQuaWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgc2V0Q2hhcmNhdGVyOFxyXG59XHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuXHJcbn0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+e2lkLmlkfTwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjtcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXJhY3RlciIsImNoYXJhY3RlciIsInNldENoYXJjYXRlciIsInF1ZXJ5IiwiaWQiLCJmZXRjaERhdGEiLCJyZXMiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwic2V0Q2hhcmNhdGVyOCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/character/[id].tsx\n");

/***/ })

});