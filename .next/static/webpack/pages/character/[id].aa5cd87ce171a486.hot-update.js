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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Character = function() {\n    var ref, ref1;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), character = ref2[0], setCharcater = ref2[1];\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var id1 = query.id;\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var urlWithIdQuery, res, data, id, name;\n            return C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        urlWithIdQuery = \"https://rickandmortyapi.com/api/character/\".concat(id);\n                        _ctx.next = 3;\n                        return fetch(urlWithIdQuery);\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        data = _ctx.sent;\n                        id = data.id, name = data.name;\n                        setCharcater({\n                            name: name,\n                            id: id\n                        });\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetchData();\n    }, []);\n    if (!character) return \"Loading\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"cards\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"CharacterCard__name-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"CharacterCard\",\n                        src: character === null || character === void 0 ? void 0 : character.image,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Name: \",\n                            character === null || character === void 0 ? void 0 : character.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Origin: \",\n                            character === null || character === void 0 ? void 0 : (ref = character.origin) === null || ref === void 0 ? void 0 : ref.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Gender: \",\n                            character === null || character === void 0 ? void 0 : character.gender\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Location: \",\n                            character === null || character === void 0 ? void 0 : (ref1 = character.location) === null || ref1 === void 0 ? void 0 : ref1.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Character, \"CwIj/1EUfkUVEVQwgQXwRiCQsGo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Character;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\nvar _c;\n$RefreshReg$(_c, \"Character\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNIO0dBaENLVCxTQUFTOztRQUVHSCxrREFBUzs7O0FBRnJCRyxLQUFBQSxTQUFTO0FBbUNmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyL1tpZF0udHN4PzgxMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBDaGFyYWN0ZXJ7XHJcbiAgaWQ6bnVtYmVyLFxyXG4gIG5hbWU6c3RyaW5nLFxyXG4gIGltYWdlOnN0cmluZyxcclxuICBzdGF0dXM6c3RyaW5nLFxyXG4gIG9yaWdpbjpPcmlnaW4sXHJcbiAgZ2VuZGVyOnN0cmluZyxcclxuICBsb2NhdGlvbjpMb2NhdGlvblxyXG59XHJcbmludGVyZmFjZSBPcmlnaW57IG5hbWU6c3RyaW5nIH07XHJcbmludGVyZmFjZSBMb2NhdGlvbnsgbmFtZTpzdHJpbmcsIHVybDpzdHJpbmcgfTtcclxuXHJcbmNvbnN0IENoYXJhY3RlciA9ICgpID0+e1xyXG4gIGNvbnN0IFsgY2hhcmFjdGVyLHNldENoYXJjYXRlcl0gPSB1c2VTdGF0ZTxDaGFyYWN0ZXIgfCBudWxsPigpO1xyXG4gIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSBxdWVyeTtcclxuXHJcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jKCkgPT57XHJcbiAgY29uc3QgdXJsV2l0aElkUXVlcnkgPSBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtpZH1gO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybFdpdGhJZFF1ZXJ5KTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCB7IGlkLCBuYW1lfSA9IGRhdGFcclxuICBzZXRDaGFyY2F0ZXIoe25hbWU6bmFtZSxpZDppZH0pO1xyXG59XHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuICBmZXRjaERhdGEoKVxyXG59LFtdKVxyXG5cclxuaWYoIWNoYXJhY3RlcilyZXR1cm4gXCJMb2FkaW5nXCJcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhcmFjdGVyQ2FyZF9fbmFtZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIkNoYXJhY3RlckNhcmRcIiBzcmM9e2NoYXJhY3Rlcj8uaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPHA+TmFtZToge2NoYXJhY3Rlcj8ubmFtZX08L3A+XHJcbiAgICAgICAgPHA+T3JpZ2luOiB7Y2hhcmFjdGVyPy5vcmlnaW4/Lm5hbWV9PC9wPlxyXG4gICAgICAgIDxwPkdlbmRlcjoge2NoYXJhY3Rlcj8uZ2VuZGVyfTwvcD5cclxuICAgICAgICA8cD5Mb2NhdGlvbjoge2NoYXJhY3Rlcj8ubG9jYXRpb24/Lm5hbWV9PC9wPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyO1xyXG5cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hhcmFjdGVyIiwiY2hhcmFjdGVyIiwic2V0Q2hhcmNhdGVyIiwicXVlcnkiLCJpZCIsImZldGNoRGF0YSIsInVybFdpdGhJZFF1ZXJ5IiwicmVzIiwiZGF0YSIsIm5hbWUiLCJmZXRjaCIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInAiLCJvcmlnaW4iLCJnZW5kZXIiLCJsb2NhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/character/[id].tsx\n");

/***/ })

});