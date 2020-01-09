webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);











var Auth0 =
/*#__PURE__*/
function () {
  function Auth0() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Auth0);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_5__["default"].WebAuth({
      domain: 'dev-muyfhpy4.auth0.com',
      clientID: '1gbOuVc9mDL2rfsmbsDFGOPbWH0eB2oT',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Auth0, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
        _this.auth0.parseHash(function (err, authResult) {
          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult);

            resolve();
          } else if (err) {
            reject(err);
            console.log(err);
          }
        });
      });
    }
  }, {
    key: "setSession",
    value: function setSession(authResult) {
      // debugger;
      // Set the time that the Access Token will expire at
      var conversion = authResult.expiresIn * 1000;

      var expiresAt = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(conversion + new Date().getTime());

      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set('user', authResult.idTokenPayload);
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set('jwt', authResult.idToken);
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set('expiresAt', expiresAt);
    }
  }, {
    key: "logout",
    value: function logout() {
      // Clear Access Token and ID Token from local storage
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.remove('user');
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.remove('jwt');
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.remove('expiresAt');
      this.auth0.logout({
        returnTo: '',
        clientID: '1gbOuVc9mDL2rfsmbsDFGOPbWH0eB2oT'
      });
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "getJWKS",
    value: function getJWKS() {
      var res, jwks;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getJWKS$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('https://dev-muyfhpy4.auth0.com/.well-known/jwks.json'));

            case 2:
              res = _context.sent;
              jwks = res.data;
              return _context.abrupt("return", jwks);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "verifyToken",
    value: function verifyToken(token) {
      var decodedToken, jwks, jwk, cert, verifiedToken, _expiresAt, _currentTime, expiresAt, currentTime;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function verifyToken$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!token) {
                _context2.next = 23;
                break;
              }

              decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_8___default.a.decode(token, {
                complete: true
              });
              _context2.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getJWKS());

            case 4:
              jwks = _context2.sent;
              jwk = jwks.keys[0]; // BUILD CERTIFICATE

              cert = jwk.x5c[0];
              cert = cert.match(/.{1,64}/g).join('\n');
              cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n"); //

              if (!(jwk.kid === decodedToken.header.kid)) {
                _context2.next = 20;
                break;
              }

              _context2.prev = 10;
              verifiedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_8___default.a.verify(token, cert);
              _expiresAt = verifiedToken.exp * 1000;
              _currentTime = new Date();
              return _context2.abrupt("return", verifiedToken && _currentTime.getTime() < _expiresAt ? decodedToken : undefined);

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](10);
              return _context2.abrupt("return", undefined);

            case 20:
              expiresAt = decodedToken.exp * 1000;
              currentTime = new Date();
              return _context2.abrupt("return", decodedToken && currentTime.getTime() < expiresAt ? decodedToken : undefined);

            case 23:
              return _context2.abrupt("return", undefined);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[10, 17]]);
    }
  }, {
    key: "clientAuth",
    value: function clientAuth() {
      var token, verifiedToken;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function clientAuth$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              token = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.getJSON('jwt');
              verifiedToken = this.verifyToken(token);
              return _context3.abrupt("return", verifiedToken);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "serverAuth",
    value: function serverAuth(req) {
      var tokenCookie, token, verifiedToken, currentTime;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function serverAuth$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!req.headers.cookie) {
                _context4.next = 10;
                break;
              }

              tokenCookie = req.headers.cookie.split(';').find(function (c) {
                return c.trim().startsWith('jwt=');
              });

              if (tokenCookie) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt("return", undefined);

            case 4:
              token = tokenCookie.split('=')[1];
              _context4.next = 7;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.verifyToken(token));

            case 7:
              verifiedToken = _context4.sent;
              currentTime = new Date();
              return _context4.abrupt("return", verifiedToken);

            case 10:
              return _context4.abrupt("return", undefined);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Auth0;
}();

var auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["default"] = (auth0Client);

/***/ })

})
//# sourceMappingURL=index.js.57266f09fb610e15797e.hot-update.js.map