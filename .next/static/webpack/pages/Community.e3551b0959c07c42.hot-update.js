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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AddCommunityButton = ()=>{\n    _s();\n    const [isPopupOpen, setPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [communityName, setCommunityName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [communityType, setCommunityType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openPopup = ()=>{\n        setPopupOpen(true);\n    };\n    const closePopup = ()=>{\n        setPopupOpen(false);\n    };\n    const handleAddCommunity = ()=>{\n        // You can implement the logic to add a community here\n        console.log(\"Adding community:\", communityName, communityType);\n        // Reset the form\n        setCommunityName(\"\");\n        setCommunityType(\"\");\n        // Close the popup\n        closePopup();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-30\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Communities\"\n                }, void 0, false, {\n                    fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-start ml-20 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: openPopup,\n                        className: \"bg-blue-500 text-white p-3 rounded-xl\",\n                        children: \"Add Community\"\n                    }, void 0, false, {\n                        fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    isPopupOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 rounded shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-lg font-semibold mb-2\",\n                                    children: \"Add a Community\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-2 text-zinc-800\",\n                                    children: \"Community Name:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: communityName,\n                                    onChange: (e)=>setCommunityName(e.target.value),\n                                    className: \"w-full p-2 mb-2 border text-zinc-800 border-gray-300 rounded\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-2 text-zinc-800\",\n                                    children: \"Community Type (e.g., Movies or Music):\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: communityType,\n                                    onChange: (e)=>setCommunityType(e.target.value),\n                                    className: \"w-full p-2 mb-2 border border-gray-300 text-zinc-800 rounded\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleAddCommunity,\n                                    className: \"bg-blue-500 text-white rounded p-2 mr-2\",\n                                    children: \"Add\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: closePopup,\n                                    className: \"bg-gray-300 text-gray-700 rounded p-2\",\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddCommunityButton, \"HGXx9y8MUAkD8do03urxYAKYB4Q=\");\n_c = AddCommunityButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddCommunityButton);\nvar _c;\n$RefreshReg$(_c, \"AddCommunityButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21tdW5pdGllcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUV4QyxNQUFNRSxxQkFBcUI7O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNJLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNNLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNUSxZQUFZO1FBQ2hCTCxhQUFhO0lBQ2Y7SUFFQSxNQUFNTSxhQUFhO1FBQ2pCTixhQUFhO0lBQ2Y7SUFFQSxNQUFNTyxxQkFBcUI7UUFDekIsc0RBQXNEO1FBQ3REQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCUixlQUFlRTtRQUNoRCxpQkFBaUI7UUFDakJELGlCQUFpQjtRQUNqQkUsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQkU7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSTs7MEJBQ0csOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQzs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NDLFNBQVNWO3dCQUNUTyxXQUFVO2tDQUNYOzs7Ozs7b0JBR0FiLDZCQUNDLDhEQUFDWTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSTtvQ0FBR0osV0FBVTs4Q0FBNkI7Ozs7Ozs4Q0FDM0MsOERBQUNLO29DQUFNTCxXQUFVOzhDQUEyQjs7Ozs7OzhDQUc1Qyw4REFBQ007b0NBQ0NDLE1BQUs7b0NBQ0xDLE9BQU9uQjtvQ0FDUG9CLFVBQVUsQ0FBQ0MsSUFBTXBCLGlCQUFpQm9CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDaERSLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ0s7b0NBQU1MLFdBQVU7OENBQTJCOzs7Ozs7OENBRzVDLDhEQUFDTTtvQ0FDQ0MsTUFBSztvQ0FDTEMsT0FBT2pCO29DQUNQa0IsVUFBVSxDQUFDQyxJQUFNbEIsaUJBQWlCa0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUNoRFIsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDRTtvQ0FDQ0MsU0FBU1I7b0NBQ1RLLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ0U7b0NBQ0NDLFNBQVNUO29DQUNUTSxXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBM0VNZDtLQUFBQTtBQTZFTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbW11bml0aWVzLnRzeD85YjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBZGRDb21tdW5pdHlCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1BvcHVwT3Blbiwgc2V0UG9wdXBPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbW11bml0eU5hbWUsIHNldENvbW11bml0eU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb21tdW5pdHlUeXBlLCBzZXRDb21tdW5pdHlUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9wZW5Qb3B1cCA9ICgpID0+IHtcbiAgICBzZXRQb3B1cE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgICBzZXRQb3B1cE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZENvbW11bml0eSA9ICgpID0+IHtcbiAgICAvLyBZb3UgY2FuIGltcGxlbWVudCB0aGUgbG9naWMgdG8gYWRkIGEgY29tbXVuaXR5IGhlcmVcbiAgICBjb25zb2xlLmxvZyhcIkFkZGluZyBjb21tdW5pdHk6XCIsIGNvbW11bml0eU5hbWUsIGNvbW11bml0eVR5cGUpO1xuICAgIC8vIFJlc2V0IHRoZSBmb3JtXG4gICAgc2V0Q29tbXVuaXR5TmFtZShcIlwiKTtcbiAgICBzZXRDb21tdW5pdHlUeXBlKFwiXCIpO1xuICAgIC8vIENsb3NlIHRoZSBwb3B1cFxuICAgIGNsb3NlUG9wdXAoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMzBcIj5cbiAgICAgICAgICAgIDxwPkNvbW11bml0aWVzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IG1sLTIwIFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17b3BlblBvcHVwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcC0zIHJvdW5kZWQteGxcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIENvbW11bml0eVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge2lzUG9wdXBPcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPkFkZCBhIENvbW11bml0eTwvaDI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtemluYy04MDBcIj5cbiAgICAgICAgICAgICAgICBDb21tdW5pdHkgTmFtZTpcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tdW5pdHlOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbXVuaXR5TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBtYi0yIGJvcmRlciB0ZXh0LXppbmMtODAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC16aW5jLTgwMFwiPlxuICAgICAgICAgICAgICAgIENvbW11bml0eSBUeXBlIChlLmcuLCBNb3ZpZXMgb3IgTXVzaWMpOlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbW11bml0eVR5cGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tdW5pdHlUeXBlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIG1iLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXppbmMtODAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkQ29tbXVuaXR5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBwLTIgbXItMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZVBvcHVwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtZ3JheS03MDAgcm91bmRlZCBwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRDb21tdW5pdHlCdXR0b247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkZENvbW11bml0eUJ1dHRvbiIsImlzUG9wdXBPcGVuIiwic2V0UG9wdXBPcGVuIiwiY29tbXVuaXR5TmFtZSIsInNldENvbW11bml0eU5hbWUiLCJjb21tdW5pdHlUeXBlIiwic2V0Q29tbXVuaXR5VHlwZSIsIm9wZW5Qb3B1cCIsImNsb3NlUG9wdXAiLCJoYW5kbGVBZGRDb21tdW5pdHkiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Communities.tsx\n"));

/***/ })

});