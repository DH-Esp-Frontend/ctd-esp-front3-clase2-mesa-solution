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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Character = function() {\n    var ref, ref1;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), character = ref2[0], setCharcater = ref2[1];\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var id = query.id;\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var urlWithIdQuery, res, data;\n            return C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        urlWithIdQuery = \"https://rickandmortyapi.com/api/character/\".concat(id);\n                        _ctx.next = 3;\n                        return fetch(urlWithIdQuery);\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        data = _ctx.sent;\n                        setCharcater(data);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetchData();\n    }, []);\n    if (!character) return \"Loading\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"cards\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"CharacterCard__name-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"CharacterCard\",\n                        src: character === null || character === void 0 ? void 0 : character.image,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Name: \",\n                            character === null || character === void 0 ? void 0 : character.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Origin: \",\n                            character === null || character === void 0 ? void 0 : (ref = character.origin) === null || ref === void 0 ? void 0 : ref.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Gender: \",\n                            character === null || character === void 0 ? void 0 : character.gender\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Location: \",\n                            character === null || character === void 0 ? void 0 : (ref1 = character.location) === null || ref1 === void 0 ? void 0 : ref1.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Character, \"CwIj/1EUfkUVEVQwgQXwRiCQsGo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Character;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\nvar _c;\n$RefreshReg$(_c, \"Character\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBDaGFyYWN0ZXJ7XHJcbiAgaWQ6bnVtYmVyLFxyXG4gIG5hbWU6c3RyaW5nLFxyXG4gIGltYWdlOnN0cmluZyxcclxuICBzdGF0dXM6c3RyaW5nLFxyXG4gIG9yaWdpbjpPcmlnaW4sXHJcbiAgZ2VuZGVyOnN0cmluZyxcclxuICBsb2NhdGlvbjpMb2NhdGlvblxyXG59XHJcbmludGVyZmFjZSBPcmlnaW57IG5hbWU6c3RyaW5nIH07XHJcbmludGVyZmFjZSBMb2NhdGlvbnsgbmFtZTpzdHJpbmcsIHVybDpzdHJpbmcgfTtcclxuXHJcbmNvbnN0IENoYXJhY3RlciA9ICgpID0+e1xyXG4gIGNvbnN0IFsgY2hhcmFjdGVyLHNldENoYXJjYXRlcl0gPSB1c2VTdGF0ZTxDaGFyYWN0ZXIgfCBudWxsPigpO1xyXG4gIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSBxdWVyeTtcclxuXHJcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jKCkgPT57XHJcbiAgY29uc3QgdXJsV2l0aElkUXVlcnkgPSBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtpZH1gO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybFdpdGhJZFF1ZXJ5KTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBcclxuICBzZXRDaGFyY2F0ZXIoZGF0YSk7XHJcbn1cclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gIGZldGNoRGF0YSgpXHJcbn0sW10pXHJcblxyXG5pZighY2hhcmFjdGVyKXJldHVybiBcIkxvYWRpbmdcIlxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFyYWN0ZXJDYXJkX19uYW1lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiQ2hhcmFjdGVyQ2FyZFwiIHNyYz17Y2hhcmFjdGVyPy5pbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICA8cD5OYW1lOiB7Y2hhcmFjdGVyPy5uYW1lfTwvcD5cclxuICAgICAgICA8cD5PcmlnaW46IHtjaGFyYWN0ZXI/Lm9yaWdpbj8ubmFtZX08L3A+XHJcbiAgICAgICAgPHA+R2VuZGVyOiB7Y2hhcmFjdGVyPy5nZW5kZXJ9PC9wPlxyXG4gICAgICAgIDxwPkxvY2F0aW9uOiB7Y2hhcmFjdGVyPy5sb2NhdGlvbj8ubmFtZX08L3A+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7XHJcblxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGFyYWN0ZXIiLCJjaGFyYWN0ZXIiLCJzZXRDaGFyY2F0ZXIiLCJxdWVyeSIsImlkIiwiZmV0Y2hEYXRhIiwidXJsV2l0aElkUXVlcnkiLCJyZXMiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwIiwibmFtZSIsIm9yaWdpbiIsImdlbmRlciIsImxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/character/[id].tsx\n");

/***/ })

});