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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Character = function() {\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), character = ref1[0], setCharcater = ref1[1];\n    var ref2 = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(), id = ref2.query;\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, data;\n            return C_Users_Usuario_OneDrive_Escritorio_iteracion_clase2_ctd_esp_front3_clase2_mesa_solution_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"https://rickandmortyapi.com/api/character/\".concat(id.id));\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.json();\n                    case 5:\n                        data = _ctx.sent;\n                        // console.log(data);\n                        setCharcater(data);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetchData();\n    }, []);\n    console.log(\"-->\", character);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"cards\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    className: \"CharacterCard\",\n                    src: character === null || character === void 0 ? void 0 : character.image,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"CharacterCard__name-container\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Name: \",\n                        character === null || character === void 0 ? void 0 : character.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Origin: \",\n                        character === null || character === void 0 ? void 0 : (ref = character.origin) === null || ref === void 0 ? void 0 : ref.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Gender: \",\n                        character === null || character === void 0 ? void 0 : character.gender\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Location: \",\n                        character === null || character === void 0 ? void 0 : character.location.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(Character, \"pZQT/F0EsY7pp34sf1OmvpCh0Mc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Character;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\nvar _c;\n$RefreshReg$(_c, \"Character\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFyYWN0ZXIvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3dDO0FBQ0k7O0FBb0I1QyxJQUFNRyxTQUFTLEdBQUcsV0FBSztRQXVCSEMsR0FBaUI7O0lBdEJuQyxJQUFrQ0YsSUFBNEIsR0FBNUJBLCtDQUFRLEVBQW9CLEVBekJoRSxTQXlCbUIsR0FBaUJBLElBQTRCLEdBQTdDLEVBekJuQixZQXlCZ0MsR0FBSUEsSUFBNEIsR0FBaEM7SUFDOUIsSUFBbUJGLElBQVcsR0FBWEEsc0RBQVMsRUFBRSxFQUF2Qk0sRUFBUSxHQUFJTixJQUFXLENBQXZCTSxLQUFLO0lBRWQsSUFBTUUsU0FBUzttQkFBRyx5T0FBVTtnQkFDcEJDLEdBQUcsRUFDSEMsSUFBSTs7Ozs7K0JBRFFDLEtBQUssQ0FBQyw0Q0FBMkMsQ0FBUSxPQUFOSixFQUFFLENBQUNBLEVBQUUsQ0FBRSxDQUFDOzt3QkFBdkVFLEdBQUcsWUFBb0U7OytCQUMxREEsR0FBRyxDQUFDRyxJQUFJLEVBQUU7O3dCQUF2QkYsSUFBSSxZQUFtQjt3QkFDN0IscUJBQXFCO3dCQUNyQkwsWUFBWSxDQUFDSyxJQUFJLENBQUMsQ0FBQzs7Ozs7O1NBQ3BCO3dCQUxLRixTQUFTOzs7T0FLZDtJQUVEUCxnREFBUyxDQUFDLFdBQUk7UUFDWk8sU0FBUyxFQUFFO0tBQ1osRUFBQyxFQUFFLENBQUM7SUFDTEssT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFDVixTQUFTLENBQUM7SUFDMUIscUJBQ0UsOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7a0JBQ3hCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxPQUFPOzs4QkFDcEIsOERBQUNDLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxlQUFlO29CQUFDRSxHQUFHLEVBQUVkLFNBQVMsYUFBVEEsU0FBUyxXQUFPLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsU0FBUyxDQUFFZSxLQUFLO29CQUFFQyxHQUFHLEVBQUMsRUFBRTs7Ozs7eUJBQUc7OEJBQy9ELDhEQUFDTCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsK0JBQStCOzs7Ozt5QkFFeEM7OEJBQ04sOERBQUNLLEdBQUM7O3dCQUFDLFFBQU07d0JBQUNqQixTQUFTLGFBQVRBLFNBQVMsV0FBTSxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLFNBQVMsQ0FBRWtCLElBQUk7Ozs7Ozt5QkFBSzs4QkFDOUIsOERBQUNELEdBQUM7O3dCQUFDLFVBQVE7d0JBQUNqQixTQUFTLGFBQVRBLFNBQVMsV0FBUSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLEdBQWlCLEdBQWpCQSxTQUFTLENBQUVtQixNQUFNLGNBQWpCbkIsR0FBaUIsY0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxHQUFpQixDQUFFa0IsSUFBSTs7Ozs7O3lCQUFLOzhCQUN4Qyw4REFBQ0QsR0FBQzs7d0JBQUMsVUFBUTt3QkFBQ2pCLFNBQVMsYUFBVEEsU0FBUyxXQUFRLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsU0FBUyxDQUFFb0IsTUFBTTs7Ozs7O3lCQUFLOzhCQUNsQyw4REFBQ0gsR0FBQzs7d0JBQUMsWUFBVTt3QkFBQ2pCLFNBQVMsYUFBVEEsU0FBUyxXQUFVLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsU0FBUyxDQUFFcUIsUUFBUSxDQUFDSCxJQUFJOzs7Ozs7eUJBQUs7Ozs7OztpQkFDdkM7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBN0JLbkIsU0FBUzs7UUFFTUgsa0RBQVM7OztBQUZ4QkcsS0FBQUEsU0FBUztBQWdDZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXJhY3Rlci9baWRdLnRzeD84MTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgR2V0U3RhdGljUHJvcHMsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIE9yaWdpbntcclxuICBuYW1lOnN0cmluZ1xyXG59XHJcbmludGVyZmFjZSBMb2NhdGlvbntcclxuICBuYW1lOnN0cmluZyxcclxuICB1cmw6c3RyaW5nXHJcbn1cclxuaW50ZXJmYWNlIENoYXJhY3RlcntcclxuICBpZDpudW1iZXIsXHJcbiAgbmFtZTpzdHJpbmcsXHJcbiAgaW1hZ2U6c3RyaW5nLFxyXG4gIHN0YXR1czpzdHJpbmcsXHJcbiAgb3JpZ2luOk9yaWdpbixcclxuICBnZW5kZXI6c3RyaW5nLFxyXG4gIGxvY2F0aW9uOkxvY2F0aW9uXHJcbn1cclxuXHJcbmNvbnN0IENoYXJhY3RlciA9ICgpID0+e1xyXG4gIGNvbnN0IFsgY2hhcmFjdGVyLHNldENoYXJjYXRlcl0gPSB1c2VTdGF0ZTxDaGFyYWN0ZXIgfCBudWxsPigpO1xyXG4gIGNvbnN0IHtxdWVyeTppZH0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMoKSA9PntcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtpZC5pZH1gKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBzZXRDaGFyY2F0ZXIoZGF0YSk7XHJcbn1cclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gIGZldGNoRGF0YSgpXHJcbn0sW10pXHJcbmNvbnNvbGUubG9nKFwiLS0+XCIsY2hhcmFjdGVyKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJDaGFyYWN0ZXJDYXJkXCIgc3JjPXtjaGFyYWN0ZXI/LmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhcmFjdGVyQ2FyZF9fbmFtZS1jb250YWluZXJcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPk5hbWU6IHtjaGFyYWN0ZXI/Lm5hbWV9PC9wPlxyXG4gICAgICAgIDxwPk9yaWdpbjoge2NoYXJhY3Rlcj8ub3JpZ2luPy5uYW1lfTwvcD5cclxuICAgICAgICA8cD5HZW5kZXI6IHtjaGFyYWN0ZXI/LmdlbmRlcn08L3A+XHJcbiAgICAgICAgPHA+TG9jYXRpb246IHtjaGFyYWN0ZXI/LmxvY2F0aW9uLm5hbWV9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7XHJcblxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGFyYWN0ZXIiLCJjaGFyYWN0ZXIiLCJzZXRDaGFyY2F0ZXIiLCJxdWVyeSIsImlkIiwiZmV0Y2hEYXRhIiwicmVzIiwiZGF0YSIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInAiLCJuYW1lIiwib3JpZ2luIiwiZ2VuZGVyIiwibG9jYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/character/[id].tsx\n");

/***/ })

});