"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/character/[id]";
exports.ids = ["pages/character/[id]"];
exports.modules = {

/***/ "./pages/character/[id].tsx":
/*!**********************************!*\
  !*** ./pages/character/[id].tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Character = ()=>{\n    const { 0: character , 1: setCharcater  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = query;\n    const fetchData = async ()=>{\n        const urlWithIdQuery = `https://rickandmortyapi.com/api/character/${id}`;\n        const res = await fetch(urlWithIdQuery);\n        const data = await res.json();\n        setCharcater(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    if (!character) return \"Loading\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cards\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"CharacterCard__name-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"CharacterCard\",\n                        src: character?.image,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Name: \",\n                            character?.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Origin: \",\n                            character?.origin?.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Gender: \",\n                            character?.gender\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Location: \",\n                            character?.location?.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\iteracion\\\\clase2\\\\ctd-esp-front3-clase2-mesa-solution\\\\pages\\\\character\\\\[id].tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Character);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFyYWN0ZXIvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0k7QUFjNUMsTUFBTUcsU0FBUyxHQUFHLElBQUs7SUFDckIsTUFBTSxFQWhCUixHQWdCVUMsU0FBUyxHQWhCbkIsR0FnQm9CQyxZQUFZLE1BQUlILCtDQUFRLEVBQW9CO0lBQzlELE1BQU0sRUFBQ0ksS0FBSyxHQUFDLEdBQUdOLHNEQUFTLEVBQUU7SUFDM0IsTUFBTSxFQUFFTyxFQUFFLEdBQUUsR0FBR0QsS0FBSztJQUV0QixNQUFNRSxTQUFTLEdBQUcsVUFBVTtRQUMxQixNQUFNQyxjQUFjLEdBQUcsQ0FBQywwQ0FBMEMsRUFBRUYsRUFBRSxDQUFDLENBQUM7UUFDeEUsTUFBTUcsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsY0FBYyxDQUFDO1FBQ3ZDLE1BQU1HLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtRQUU3QlIsWUFBWSxDQUFDTyxJQUFJLENBQUMsQ0FBQztLQUNwQjtJQUVEWCxnREFBUyxDQUFDLElBQUk7UUFDWk8sU0FBUyxFQUFFO0tBQ1osRUFBQyxFQUFFLENBQUM7SUFFTCxJQUFHLENBQUNKLFNBQVMsRUFBQyxPQUFPLFNBQVM7SUFDNUIscUJBQ0UsOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7a0JBQ3hCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxPQUFPO3NCQUNwQiw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLCtCQUErQjs7a0NBQzlDLDhEQUFDQyxLQUFHO3dCQUFDRCxTQUFTLEVBQUMsZUFBZTt3QkFBQ0UsR0FBRyxFQUFFYixTQUFTLEVBQUVjLEtBQUs7d0JBQUVDLEdBQUcsRUFBQyxFQUFFOzs7OztpQ0FBRztrQ0FDL0QsOERBQUNDLEdBQUM7OzRCQUFDLFFBQU07NEJBQUNoQixTQUFTLEVBQUVpQixJQUFJOzs7Ozs7aUNBQUs7a0NBQzlCLDhEQUFDRCxHQUFDOzs0QkFBQyxVQUFROzRCQUFDaEIsU0FBUyxFQUFFa0IsTUFBTSxFQUFFRCxJQUFJOzs7Ozs7aUNBQUs7a0NBQ3hDLDhEQUFDRCxHQUFDOzs0QkFBQyxVQUFROzRCQUFDaEIsU0FBUyxFQUFFbUIsTUFBTTs7Ozs7O2lDQUFLO2tDQUNsQyw4REFBQ0gsR0FBQzs7NEJBQUMsWUFBVTs0QkFBQ2hCLFNBQVMsRUFBRW9CLFFBQVEsRUFBRUgsSUFBSTs7Ozs7O2lDQUFLOzs7Ozs7eUJBRXRDOzs7OztxQkFDRjs7Ozs7aUJBQ0YsQ0FDTjtDQUNIO0FBR0QsaUVBQWVsQixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXNhMDQvLi9wYWdlcy9jaGFyYWN0ZXIvW2lkXS50c3g/ODEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIENoYXJhY3RlcntcclxuICBpZDpudW1iZXIsXHJcbiAgbmFtZTpzdHJpbmcsXHJcbiAgaW1hZ2U6c3RyaW5nLFxyXG4gIHN0YXR1czpzdHJpbmcsXHJcbiAgb3JpZ2luOk9yaWdpbixcclxuICBnZW5kZXI6c3RyaW5nLFxyXG4gIGxvY2F0aW9uOkxvY2F0aW9uXHJcbn1cclxuaW50ZXJmYWNlIE9yaWdpbnsgbmFtZTpzdHJpbmcgfTtcclxuaW50ZXJmYWNlIExvY2F0aW9ueyBuYW1lOnN0cmluZywgdXJsOnN0cmluZyB9O1xyXG5cclxuY29uc3QgQ2hhcmFjdGVyID0gKCkgPT57XHJcbiAgY29uc3QgWyBjaGFyYWN0ZXIsc2V0Q2hhcmNhdGVyXSA9IHVzZVN0YXRlPENoYXJhY3RlciB8IG51bGw+KCk7XHJcbiAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xyXG5cclxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMoKSA9PntcclxuICBjb25zdCB1cmxXaXRoSWRRdWVyeSA9IGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2lkfWA7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsV2l0aElkUXVlcnkpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIFxyXG4gIHNldENoYXJjYXRlcihkYXRhKTtcclxufVxyXG5cclxudXNlRWZmZWN0KCgpPT57XHJcbiAgZmV0Y2hEYXRhKClcclxufSxbXSlcclxuXHJcbmlmKCFjaGFyYWN0ZXIpcmV0dXJuIFwiTG9hZGluZ1wiXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXJhY3RlckNhcmRfX25hbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJDaGFyYWN0ZXJDYXJkXCIgc3JjPXtjaGFyYWN0ZXI/LmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxwPk5hbWU6IHtjaGFyYWN0ZXI/Lm5hbWV9PC9wPlxyXG4gICAgICAgIDxwPk9yaWdpbjoge2NoYXJhY3Rlcj8ub3JpZ2luPy5uYW1lfTwvcD5cclxuICAgICAgICA8cD5HZW5kZXI6IHtjaGFyYWN0ZXI/LmdlbmRlcn08L3A+XHJcbiAgICAgICAgPHA+TG9jYXRpb246IHtjaGFyYWN0ZXI/LmxvY2F0aW9uPy5uYW1lfTwvcD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjtcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXJhY3RlciIsImNoYXJhY3RlciIsInNldENoYXJjYXRlciIsInF1ZXJ5IiwiaWQiLCJmZXRjaERhdGEiLCJ1cmxXaXRoSWRRdWVyeSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInAiLCJuYW1lIiwib3JpZ2luIiwiZ2VuZGVyIiwibG9jYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/character/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/character/[id].tsx"));
module.exports = __webpack_exports__;

})();