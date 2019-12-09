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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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

/***/ "./src/components/Category/index.ts":
/*!******************************************!*\
  !*** ./src/components/Category/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category */ "./src/components/Category/Category.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Category__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Layout/Main/Category/Category.tsx":
false,

/***/ "./src/components/Layout/Main/Category/index.ts":
false,

/***/ "./src/components/Layout/Main/Main.tsx":
/*!*********************************************!*\
  !*** ./src/components/Layout/Main/Main.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Category */ "./src/components/Category/index.ts");
var _jsxFileName = "/Users/leesuwon/Documents/timing-client/src/components/Layout/Main/Main.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "Main__MainWrapper",
  componentId: "o89uyf-0"
})(["display:flex;max-width:80rem;min-height:100vh;margin:0 auto;"]);
var Aside = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside.withConfig({
  displayName: "Main__Aside",
  componentId: "o89uyf-1"
})(["width:25%;margin:0.2rem;border:1px solid green;"]);
var Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "Main__Section",
  componentId: "o89uyf-2"
})(["flex:1;margin:0.2rem;border:1px solid red;"]);

var Main = function Main(_ref) {
  var children = _ref.children;
  return __jsx(MainWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(Aside, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_Category__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=_app.js.e8e9a921c178398e8f34.hot-update.js.map