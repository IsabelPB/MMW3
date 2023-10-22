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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AddCommunityButton = ()=>{\n    _s();\n    const [isPopupOpen, setPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [communityName, setCommunityName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [communityType, setCommunityType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openPopup = ()=>{\n        setPopupOpen(true);\n    };\n    const closePopup = ()=>{\n        setPopupOpen(false);\n    };\n    const handleAddCommunity = ()=>{\n        // You can implement the logic to add a community here\n        console.log(\"Adding community:\", communityName, communityType);\n        // Reset the form\n        setCommunityName(\"\");\n        setCommunityType(\"\");\n        // Close the popup\n        closePopup();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: openPopup,\n                className: \"bg-blue-500 text-white p-3 rounded-xl\",\n                children: \"Add Community\"\n            }, void 0, false, {\n                fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            isPopupOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-4 rounded shadow-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-semibold mb-2\",\n                            children: \"Add a Community\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-zinc-800\",\n                            children: \"Community Name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: communityName,\n                            onChange: (e)=>setCommunityName(e.target.value),\n                            className: \"w-full p-2 mb-2 border text-zinc-800 border-gray-300 rounded\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-zinc-800\",\n                            children: \"Community Type (e.g., Movies or Music):\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: communityType,\n                            onChange: (e)=>setCommunityType(e.target.value),\n                            className: \"w-full p-2 mb-2 border border-gray-300 text-zinc-800 rounded\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleAddCommunity,\n                            className: \"bg-blue-500 text-white rounded p-2 mr-2\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: closePopup,\n                            className: \"bg-gray-300 text-gray-700 rounded p-2\",\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/allen/Documents/Projects/Web3/EthOnline2023/MMW3/src/components/Communities.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddCommunityButton, \"HGXx9y8MUAkD8do03urxYAKYB4Q=\");\n_c = AddCommunityButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddCommunityButton);\nvar _c;\n$RefreshReg$(_c, \"AddCommunityButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21tdW5pdGllcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUV4QyxNQUFNRSxxQkFBcUI7O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNJLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNNLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNUSxZQUFZO1FBQ2hCTCxhQUFhO0lBQ2Y7SUFFQSxNQUFNTSxhQUFhO1FBQ2pCTixhQUFhO0lBQ2Y7SUFFQSxNQUFNTyxxQkFBcUI7UUFDekIsc0RBQXNEO1FBQ3REQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCUixlQUFlRTtRQUNoRCxpQkFBaUI7UUFDakJELGlCQUFpQjtRQUNqQkUsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQkU7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NDLFNBQVNSO2dCQUNUTSxXQUFVOzBCQUNYOzs7Ozs7WUFHQVosNkJBQ0MsOERBQUNXO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUE2Qjs7Ozs7O3NDQUMzQyw4REFBQ0k7NEJBQU1KLFdBQVU7c0NBQTJCOzs7Ozs7c0NBQzVDLDhEQUFDSzs0QkFDQ0MsTUFBSzs0QkFDTEMsT0FBT2pCOzRCQUNQa0IsVUFBVSxDQUFDQyxJQUFNbEIsaUJBQWlCa0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUNoRFAsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDSTs0QkFBTUosV0FBVTtzQ0FBMkI7Ozs7OztzQ0FHNUMsOERBQUNLOzRCQUNDQyxNQUFLOzRCQUNMQyxPQUFPZjs0QkFDUGdCLFVBQVUsQ0FBQ0MsSUFBTWhCLGlCQUFpQmdCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDaERQLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ0M7NEJBQ0NDLFNBQVNOOzRCQUNUSSxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNDOzRCQUNDQyxTQUFTUDs0QkFDVEssV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQXBFTWI7S0FBQUE7QUFzRU4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db21tdW5pdGllcy50c3g/OWI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQWRkQ29tbXVuaXR5QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBbaXNQb3B1cE9wZW4sIHNldFBvcHVwT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21tdW5pdHlOYW1lLCBzZXRDb21tdW5pdHlOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29tbXVuaXR5VHlwZSwgc2V0Q29tbXVuaXR5VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBvcGVuUG9wdXAgPSAoKSA9PiB7XG4gICAgc2V0UG9wdXBPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgc2V0UG9wdXBPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRDb21tdW5pdHkgPSAoKSA9PiB7XG4gICAgLy8gWW91IGNhbiBpbXBsZW1lbnQgdGhlIGxvZ2ljIHRvIGFkZCBhIGNvbW11bml0eSBoZXJlXG4gICAgY29uc29sZS5sb2coXCJBZGRpbmcgY29tbXVuaXR5OlwiLCBjb21tdW5pdHlOYW1lLCBjb21tdW5pdHlUeXBlKTtcbiAgICAvLyBSZXNldCB0aGUgZm9ybVxuICAgIHNldENvbW11bml0eU5hbWUoXCJcIik7XG4gICAgc2V0Q29tbXVuaXR5VHlwZShcIlwiKTtcbiAgICAvLyBDbG9zZSB0aGUgcG9wdXBcbiAgICBjbG9zZVBvcHVwKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtvcGVuUG9wdXB9XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcC0zIHJvdW5kZWQteGxcIlxuICAgICAgPlxuICAgICAgICBBZGQgQ29tbXVuaXR5XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtpc1BvcHVwT3BlbiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj5BZGQgYSBDb21tdW5pdHk8L2gyPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC16aW5jLTgwMFwiPkNvbW11bml0eSBOYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y29tbXVuaXR5TmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tdW5pdHlOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBtYi0yIGJvcmRlciB0ZXh0LXppbmMtODAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXppbmMtODAwXCI+XG4gICAgICAgICAgICAgIENvbW11bml0eSBUeXBlIChlLmcuLCBNb3ZpZXMgb3IgTXVzaWMpOlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tdW5pdHlUeXBlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW11bml0eVR5cGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIG1iLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXppbmMtODAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkQ29tbXVuaXR5fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcC0yIG1yLTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZVBvcHVwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNzAwIHJvdW5kZWQgcC0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkQ29tbXVuaXR5QnV0dG9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBZGRDb21tdW5pdHlCdXR0b24iLCJpc1BvcHVwT3BlbiIsInNldFBvcHVwT3BlbiIsImNvbW11bml0eU5hbWUiLCJzZXRDb21tdW5pdHlOYW1lIiwiY29tbXVuaXR5VHlwZSIsInNldENvbW11bml0eVR5cGUiLCJvcGVuUG9wdXAiLCJjbG9zZVBvcHVwIiwiaGFuZGxlQWRkQ29tbXVuaXR5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Communities.tsx\n"));

/***/ })

});