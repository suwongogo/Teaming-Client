webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/Category/Category.tsx":
/*!**********************************************!*\
  !*** ./src/components/Category/Category.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Link */ "./src/components/common/Link/index.ts");
var _jsxFileName = "/Users/leesuwon/Documents/timing-client/src/components/Category/Category.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Category__Nav",
  componentId: "tvpsfd-0"
})([""]);

var Category = function Category() {
  return __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_common_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/list/[category]",
    as: "/list/top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\uD0D1"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_common_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/list/[category]",
    as: "/list/jungle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\uC815\uAE00"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_common_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/list/[category]",
    as: "/list/mid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\uBBF8\uB4DC"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_common_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/list/[category]",
    as: "/list/ad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\uC6D0\uB51C"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_common_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/list/[category]",
    as: "/list/supporter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\uC11C\uD3FF")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./src/components/common/Link/Link.tsx":
/*!*********************************************!*\
  !*** ./src/components/common/Link/Link.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/leesuwon/Documents/timing-client/src/components/common/Link/Link.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Link = function Link(_ref) {
  var children = _ref.children,
      href = _ref.href,
      as = _ref.as;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    as: as,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/components/common/Link/index.ts":
/*!*********************************************!*\
  !*** ./src/components/common/Link/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link */ "./src/components/common/Link/Link.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Link__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

})
//# sourceMappingURL=_app.js.3544e530e0dab471e1ac.hot-update.js.map