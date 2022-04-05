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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: todos , 1: setTodo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAPIData = async ()=>{\n        let instance;\n        instance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({\n            baseURL: \"http://localhost:8080\"\n        });\n        try {\n            const response = await instance.get(\"/api/\");\n            console.log(response === null || response === void 0 ? void 0 : response.data);\n            const tododata = response === null || response === void 0 ? void 0 : response.data;\n            setTodo(tododata);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hello world\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getAPIData,\n                children: \"click\"\n            }, void 0, false, {\n                fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            todos.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.body\n                        }, void 0, false, {\n                            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/home/app/frontend/src/pages/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFzRDtBQUNWO0FBUTVDLGlFQUFnQixJQUFNO0lBQ2xCLE1BQU0sRUFWVixHQVVXRyxLQUFLLEdBVmhCLEdBVWtCQyxPQUFPLE1BQUlILCtDQUFRLENBQVMsRUFBRSxDQUFDO0lBRTdDLE1BQU1JLFVBQVUsR0FBRyxVQUFZO1FBQzNCLElBQUlDLFFBQVE7UUFFWkEsUUFBUSxHQUFHSixtREFBWSxDQUFDO1lBQ3BCTSxPQUFPLEVBQUUsdUJBQXVCO1NBQ25DLENBQUM7UUFFRixJQUFJO1lBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUM1Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsYUFBUkEsUUFBUSxXQUFNLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsUUFBUSxDQUFFSSxJQUFJLENBQUM7WUFDM0IsTUFBTUMsUUFBUSxHQUFHTCxRQUFRLGFBQVJBLFFBQVEsV0FBTSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLFFBQVEsQ0FBRUksSUFBSTtZQUMvQlQsT0FBTyxDQUFDVSxRQUFRLENBQUM7U0FDcEIsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7WUFDWkosT0FBTyxDQUFDQyxHQUFHLENBQUNHLEtBQUssQ0FBQztTQUNyQjtLQUNKO0lBQ0QscUJBQ0ksOERBQUNDLEtBQUc7O1lBQUMsYUFFRDswQkFBQSw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFYixVQUFVOzBCQUFFLE9BQUs7Ozs7O3lCQUFTO1lBQzFDRixLQUFLLENBQUNnQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxpQkFDWiw4REFBQ0osS0FBRzs7c0NBQ0EsOERBQUNLLElBQUU7c0NBQUVELElBQUksQ0FBQ0UsS0FBSzs7Ozs7cUNBQU07c0NBQ3JCLDhEQUFDQyxHQUFDO3NDQUFFSCxJQUFJLENBQUNJLElBQUk7Ozs7O3FDQUFLOzttQkFGWkosSUFBSSxDQUFDSyxFQUFFOzs7OzZCQUdYO1lBQ1QsQ0FBQzs7Ozs7O2lCQUNBLENBQ1Q7Q0FDSixFQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnXHJcblxyXG50eXBlIFRvZG8gPSB7XHJcbiAgICBpZDogc3RyaW5nXHJcbiAgICB0aXRsZTogU3RyaW5nXHJcbiAgICBib2R5OiBTdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb10gPSB1c2VTdGF0ZTxUb2RvW10+KFtdKVxyXG5cclxuICAgIGNvbnN0IGdldEFQSURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlOiBBeGlvc0luc3RhbmNlXHJcblxyXG4gICAgICAgIGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbnN0YW5jZS5nZXQoJy9hcGkvJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9kYXRhID0gcmVzcG9uc2U/LmRhdGEgYXMgVG9kb1tdXHJcbiAgICAgICAgICAgIHNldFRvZG8odG9kb2RhdGEpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBoZWxsbyB3b3JsZFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldEFQSURhdGF9PmNsaWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgIHt0b2Rvcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e2l0ZW0udGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSkgYXMgRkMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidG9kb3MiLCJzZXRUb2RvIiwiZ2V0QVBJRGF0YSIsImluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0b2RvZGF0YSIsImVycm9yIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJoMSIsInRpdGxlIiwicCIsImJvZHkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();