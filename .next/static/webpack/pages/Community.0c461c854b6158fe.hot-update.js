"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Community",{

/***/ "./src/components/Communities.tsx":
/*!****************************************!*\
  !*** ./src/components/Communities.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AddCommunityButton = ()=>{\n    _s();\n    const [isPopupOpen, setPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [communityName, setCommunityName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [communityType, setCommunityType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openPopup = ()=>{\n        setPopupOpen(true);\n    };\n    const closePopup = ()=>{\n        setPopupOpen(false);\n    };\n    const handleAddCommunity = ()=>{\n        // You can implement the logic to add a community here\n        console.log(\"Adding community:\", communityName, communityType);\n        // Reset the form\n        setCommunityName(\"\");\n        setCommunityType(\"\");\n        // Close the popup\n        closePopup();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: openPopup,\n                className: \"bg-blue-500 text-white rounded p-2\",\n                children: \"Add Community\"\n            }, void 0, false, {\n                fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            isPopupOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-4 rounded shadow-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-semibold mb-2\",\n                            children: \"Add a Community\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-zinc-800\",\n                            children: \"Community Name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: communityName,\n                            onChange: (e)=>setCommunityName(e.target.value),\n                            className: \"w-full p-2 mb-2 border text-zinc-800 border-gray-300 rounded\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-zinc-800\",\n                            children: \"Community Type (e.g., Movies or Music):\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: communityType,\n                            onChange: (e)=>setCommunityType(e.target.value),\n                            className: \"w-full p-2 mb-2 border border-gray-300 text-zinc-800 rounded\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleAddCommunity,\n                            className: \"bg-blue-500 text-white rounded p-2 mr-2\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: closePopup,\n                            className: \"bg-gray-300 text-gray-700 rounded p-2\",\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddCommunityButton, \"HGXx9y8MUAkD8do03urxYAKYB4Q=\");\n_c = AddCommunityButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddCommunityButton);\nvar _c;\n$RefreshReg$(_c, \"AddCommunityButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21tdW5pdGllcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUV4QyxNQUFNRSxxQkFBcUI7O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNJLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNNLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNUSxZQUFZO1FBQ2hCTCxhQUFhO0lBQ2Y7SUFFQSxNQUFNTSxhQUFhO1FBQ2pCTixhQUFhO0lBQ2Y7SUFFQSxNQUFNTyxxQkFBcUI7UUFDekIsc0RBQXNEO1FBQ3REQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCUixlQUFlRTtRQUNoRCxpQkFBaUI7UUFDakJELGlCQUFpQjtRQUNqQkUsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQkU7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDO2dCQUNDQyxTQUFTUDtnQkFDVFEsV0FBVTswQkFDWDs7Ozs7O1lBR0FkLDZCQUNDLDhEQUFDVztnQkFBSUcsV0FBVTswQkFDYiw0RUFBQ0g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBNkI7Ozs7OztzQ0FDM0MsOERBQUNFOzRCQUFNRixXQUFVO3NDQUEyQjs7Ozs7O3NDQUM1Qyw4REFBQ0c7NEJBQ0NDLE1BQUs7NEJBQ0xDLE9BQU9qQjs0QkFDUGtCLFVBQVUsQ0FBQ0MsSUFBTWxCLGlCQUFpQmtCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDaERMLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ0U7NEJBQU1GLFdBQVU7c0NBQTJCOzs7Ozs7c0NBRzVDLDhEQUFDRzs0QkFDQ0MsTUFBSzs0QkFDTEMsT0FBT2Y7NEJBQ1BnQixVQUFVLENBQUNDLElBQU1oQixpQkFBaUJnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQ2hETCxXQUFVOzs7Ozs7c0NBRVosOERBQUNGOzRCQUNDQyxTQUFTTDs0QkFDVE0sV0FBVTtzQ0FDWDs7Ozs7O3NDQUdELDhEQUFDRjs0QkFDQ0MsU0FBU047NEJBQ1RPLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0FwRU1mO0tBQUFBO0FBc0VOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tbXVuaXRpZXMudHN4PzliNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFkZENvbW11bml0eUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgW2lzUG9wdXBPcGVuLCBzZXRQb3B1cE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tbXVuaXR5TmFtZSwgc2V0Q29tbXVuaXR5TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbW11bml0eVR5cGUsIHNldENvbW11bml0eVR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgb3BlblBvcHVwID0gKCkgPT4ge1xuICAgIHNldFBvcHVwT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHNldFBvcHVwT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkQ29tbXVuaXR5ID0gKCkgPT4ge1xuICAgIC8vIFlvdSBjYW4gaW1wbGVtZW50IHRoZSBsb2dpYyB0byBhZGQgYSBjb21tdW5pdHkgaGVyZVxuICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIGNvbW11bml0eTpcIiwgY29tbXVuaXR5TmFtZSwgY29tbXVuaXR5VHlwZSk7XG4gICAgLy8gUmVzZXQgdGhlIGZvcm1cbiAgICBzZXRDb21tdW5pdHlOYW1lKFwiXCIpO1xuICAgIHNldENvbW11bml0eVR5cGUoXCJcIik7XG4gICAgLy8gQ2xvc2UgdGhlIHBvcHVwXG4gICAgY2xvc2VQb3B1cCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17b3BlblBvcHVwfVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcC0yXCJcbiAgICAgID5cbiAgICAgICAgQWRkIENvbW11bml0eVxuICAgICAgPC9idXR0b24+XG4gICAgICB7aXNQb3B1cE9wZW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+QWRkIGEgQ29tbXVuaXR5PC9oMj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtemluYy04MDBcIj5Db21tdW5pdHkgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbW11bml0eU5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbXVuaXR5TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgbWItMiBib3JkZXIgdGV4dC16aW5jLTgwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC16aW5jLTgwMFwiPlxuICAgICAgICAgICAgICBDb21tdW5pdHkgVHlwZSAoZS5nLiwgTW92aWVzIG9yIE11c2ljKTpcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y29tbXVuaXR5VHlwZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tdW5pdHlUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBtYi0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC16aW5jLTgwMCByb3VuZGVkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZENvbW11bml0eX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIHAtMiBtci0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VQb3B1cH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgdGV4dC1ncmF5LTcwMCByb3VuZGVkIHAtMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENvbW11bml0eUJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWRkQ29tbXVuaXR5QnV0dG9uIiwiaXNQb3B1cE9wZW4iLCJzZXRQb3B1cE9wZW4iLCJjb21tdW5pdHlOYW1lIiwic2V0Q29tbXVuaXR5TmFtZSIsImNvbW11bml0eVR5cGUiLCJzZXRDb21tdW5pdHlUeXBlIiwib3BlblBvcHVwIiwiY2xvc2VQb3B1cCIsImhhbmRsZUFkZENvbW11bml0eSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaDIiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Communities.tsx\n"));

/***/ })

});