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

/***/ "./components/Button/Mic.tsx":
/*!***********************************!*\
  !*** ./components/Button/Mic.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MicOnOfButton\": function() { return /* binding */ MicOnOfButton; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icon_mic_on_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icon/mic-on.svg */ \"./icon/mic-on.svg\");\n/* harmony import */ var _icon_mic_off_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../icon/mic-off.svg */ \"./icon/mic-off.svg\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  &:focus {\\n    outline: 0;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 24px;\\n  height: 24px;\\n  fill: currentColor;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n//styled-componentを使いbuttonのoutlineを0に\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button(_templateObject());\n_c = Button;\nconst SVG = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].svg(_templateObject1());\n_c1 = SVG;\nconst MicOnOfButton = (param)=>{\n    let { muted , setter  } = param;\n    let icon;\n    if (muted) {\n        icon = _icon_mic_on_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    } else {\n        icon = _icon_mic_off_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n    }\n    const handleOnClick = ()=>{\n        setter(!muted);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n        onClick: handleOnClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SVG, {\n            children: [\n                \" \",\n                icon,\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nu_ma\\\\Projects\\\\SGZ-ONNX-WASM\\\\typescript\\\\components\\\\Button\\\\Mic.tsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nu_ma\\\\Projects\\\\SGZ-ONNX-WASM\\\\typescript\\\\components\\\\Button\\\\Mic.tsx\",\n        lineNumber: 34,\n        columnNumber: 11\n    }, undefined);\n};\n_c2 = MicOnOfButton;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"SVG\");\n$RefreshReg$(_c2, \"MicOnOfButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi9NaWMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ0M7QUFDSjtBQU92QyxzQ0FBc0M7QUFDdEMsTUFBTUksU0FBU0QsZ0VBQWE7S0FBdEJDO0FBTU4sTUFBTUUsTUFBTUgsNkRBQVU7TUFBaEJHO0FBTUMsTUFBTUUsZ0JBQWlDLFNBQXVCO1FBQXRCLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFO0lBQzlELElBQUlDO0lBQ0osSUFBSUYsT0FBTztRQUNURSxPQUFPVix3REFBU0E7SUFDbEIsT0FBTztRQUNMVSxPQUFPVCx5REFBVUE7SUFDbkIsQ0FBQztJQUNELE1BQU1VLGdCQUFnQixJQUFNO1FBQzFCRixPQUFPLENBQUNEO0lBQ1Y7SUFDQSxxQkFBUSw4REFBQ0w7UUFBT1MsU0FBU0Q7a0JBQ3ZCLDRFQUFDTjs7Z0JBQUk7Z0JBQUVLO2dCQUFLOzs7Ozs7Ozs7Ozs7QUFHaEIsRUFBRTtNQWRXSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J1dHRvbi9NaWMudHN4P2QzY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbWljT25JY29uIGZyb20gJ0AvaWNvbi9taWMtb24uc3ZnJztcclxuaW1wb3J0IG1pY09mZkljb24gZnJvbSAnL2ljb24vbWljLW9mZi5zdmcnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBtdXRlZDogYm9vbGVhbjtcclxuICBzZXR0ZXI6IGFueTtcclxufTtcclxuXHJcbi8vc3R5bGVkLWNvbXBvbmVudOOCkuS9v+OBhGJ1dHRvbuOBrm91dGxpbmXjgpIw44GrXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNWRyA9IHN0eWxlZC5zdmdgXHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNaWNPbk9mQnV0dG9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBtdXRlZCwgc2V0dGVyIH0pID0+IHtcclxuICBsZXQgaWNvbjtcclxuICBpZiAobXV0ZWQpIHtcclxuICAgIGljb24gPSBtaWNPbkljb247XHJcbiAgfSBlbHNlIHtcclxuICAgIGljb24gPSBtaWNPZmZJY29uO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0dGVyKCFtdXRlZCk7XHJcbiAgfTtcclxuICByZXR1cm4gKDxCdXR0b24gb25DbGljaz17aGFuZGxlT25DbGlja30+XHJcbiAgICA8U1ZHPiB7aWNvbn0gPC9TVkc+XHJcbiAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWljT25JY29uIiwibWljT2ZmSWNvbiIsInN0eWxlZCIsIkJ1dHRvbiIsImJ1dHRvbiIsIlNWRyIsInN2ZyIsIk1pY09uT2ZCdXR0b24iLCJtdXRlZCIsInNldHRlciIsImljb24iLCJoYW5kbGVPbkNsaWNrIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Button/Mic.tsx\n"));

/***/ })

});