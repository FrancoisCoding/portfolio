webpackHotUpdate("static\\development\\pages\\callback.js",{

/***/ "./pages/callback.js":
/*!***************************!*\
  !*** ./pages/callback.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_layouts_BasePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/BasePage */ "./components/layouts/BasePage.js");
/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth0 */ "./services/auth0.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\WEBSITES\\16_portfolio\\pages\\callback.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Callback = function Callback() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _services_auth0__WEBPACK_IMPORTED_MODULE_3__["default"].handleAuthentication().then(function (res) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []);
  return __jsx(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_components_layouts_BasePage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Verifying login data ... ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Callback);

/***/ })

})
//# sourceMappingURL=callback.js.76d4f94752fb4ca254fa.hot-update.js.map