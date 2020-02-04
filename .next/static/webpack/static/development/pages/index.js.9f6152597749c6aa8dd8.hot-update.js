webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/js/db.js":
/*!**********************!*\
  !*** ./lib/js/db.js ***!
  \**********************/
/*! exports provided: loadDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDB", function() { return loadDB; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);



function loadDB() {
  try {
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(_config__WEBPACK_IMPORTED_MODULE_2___default.a.option.firestore);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_js_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/js/db */ "./lib/js/db.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // 렌더링 될 때마다 실행
    console.log('useEffect'); // 마운트 될 때만 실행도 가능
  });

  var refresh = function refresh() {
    var db, querySnapshot, newData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function refresh$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_js_db__WEBPACK_IMPORTED_MODULE_7__["loadDB"])());

          case 2:
            db = _context.sent;
            _context.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(db.collection('zz').get());

          case 5:
            querySnapshot = _context.sent;
            newData = [];
            querySnapshot.forEach(function (doc) {
              newData.push(doc.data());
            });
            console.log('is updating..'); // console.log(newData);
            // return { data };
            // setData(prev => ([...newData]));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", {
    className: "jsx-1440438755"
  }, "MyXD - Index")), __jsx("h1", {
    className: "jsx-1440438755"
  }, "This is Main Page"), __jsx("button", {
    onClick: refresh,
    className: "jsx-1440438755" + " " + "btn btn-warning text-white"
  }, "refresh"), __jsx("ul", {
    className: "jsx-1440438755"
  }, props.data.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      className: "jsx-1440438755"
    }, item.zzz);
  })), __jsx("span", {
    className: "jsx-1440438755"
  }, num), __jsx("button", {
    onClick: function onClick() {
      return setNum(num + 1);
    },
    className: "jsx-1440438755" + " " + "btn btn-default"
  }, "add"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1440438755"
  }, "h1.jsx-1440438755{font-color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZG9tZmFtXFxEZXNrdG9wXFxNeVhEXFxzZXJ2ZXJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHdCLEFBR3FDLGdCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXGRvbWZhbVxcRGVza3RvcFxcTXlYRFxcc2VydmVyXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgbG9hZERCIH0gZnJvbSAnLi4vbGliL2pzL2RiJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IFsgbnVtLCBzZXROdW0gXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g66CM642U66eBIOuQoCDrlYzrp4jri6Qg7Iuk7ZaJXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZUVmZmVjdCcpO1xyXG5cclxuXHJcbiAgICAgICAgLy8g66eI7Jq07Yq4IOuQoCDrlYzrp4wg7Iuk7ZaJ64+EIOqwgOuKpVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVmcmVzaCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgZGF0YTogJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBsb2FkREIoKTtcclxuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZGIuY29sbGVjdGlvbignenonKS5nZXQoKTtcclxuICAgICAgICBsZXQgbmV3RGF0YSA9IFtdO1xyXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgICAgICBuZXdEYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpcyB1cGRhdGluZy4uJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3RGF0YSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHsgZGF0YSB9O1xyXG4gICAgICAgIC8vIHNldERhdGEocHJldiA9PiAoWy4uLm5ld0RhdGFdKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TXlYRCAtIEluZGV4PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aDE+VGhpcyBpcyBNYWluIFBhZ2U8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gYnRuLXdhcm5pbmcgdGV4dC13aGl0ZVwifSBvbkNsaWNrPXtyZWZyZXNofT5yZWZyZXNoPC9idXR0b24+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcCgoaXRlbSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uenp6fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuPntudW19PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE51bShudW0gKyAxKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+YWRkPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1jb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgbG9hZERCKCk7XHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3p6JykuZ2V0KCk7XHJcbiAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICBkYXRhLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\domfam\\\\Desktop\\\\MyXD\\\\server\\\\pages\\\\index.js */"));
};

Index.getInitialProps = function _callee() {
  var db, data, querySnapshot;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_js_db__WEBPACK_IMPORTED_MODULE_7__["loadDB"])());

        case 2:
          db = _context2.sent;
          data = [];
          _context2.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(db.collection('zz').get());

        case 6:
          querySnapshot = _context2.sent;
          querySnapshot.forEach(function (doc) {
            data.push(doc.data());
          });
          return _context2.abrupt("return", {
            data: data
          });

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9f6152597749c6aa8dd8.hot-update.js.map