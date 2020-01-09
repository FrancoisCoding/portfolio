webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shared/Header.js":
/*!*************************************!*\
  !*** ./components/shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth0 */ "./services/auth0.js");
var _jsxFileName = "F:\\WEBSITES\\16_portfolio\\components\\shared\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var BsNavLink = function BsNavLink(_ref) {
  var route = _ref.route,
      title = _ref.title;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: route,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link port-navbar-link clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " ", title, " "));
};

var Login = function Login() {
  return __jsx("span", {
    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__["default"].login,
    className: "nav-link port-navbar-link clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Login");
};

var Logout = function Logout() {
  return __jsx("span", {
    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__["default"].logout,
    className: "nav-link port-navbar-link clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Logout");
};

var Header = function Header(_ref2) {
  var isAuthenticated = _ref2.isAuthenticated;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    className: "port-navbar port-default absolute",
    color: "transparent",
    dark: true,
    expand: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
    className: "port-navbar-brand",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Isaiah Francois"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "ml-auto",
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(BsNavLink, {
    route: "/",
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(BsNavLink, {
    route: "/cv",
    title: "CV",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(BsNavLink, {
    route: "/portfolios",
    title: "Portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(BsNavLink, {
    route: "/about",
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(BsNavLink, {
    route: "/blogs",
    title: "Blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), !isAuthenticated && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(Login, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), isAuthenticated && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(Logout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.49a6580bedf3cfb509d2.hot-update.js.map