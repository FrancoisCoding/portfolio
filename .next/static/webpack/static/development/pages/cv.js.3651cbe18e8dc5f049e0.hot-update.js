webpackHotUpdate("static\\development\\pages\\cv.js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");




var Auth0 =
/*#__PURE__*/
function () {
  function Auth0() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Auth0);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["default"].WebAuth({
      domain: 'dev-muyfhpy4.auth0.com',
      clientId: '1gbOuVc9mDL2rfsmbsDFGOPbWH0eB2oT',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Auth0, [{
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }]);

  return Auth0;
}();

var auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["default"] = (auth0Client);

/***/ })

})
//# sourceMappingURL=cv.js.3651cbe18e8dc5f049e0.hot-update.js.map