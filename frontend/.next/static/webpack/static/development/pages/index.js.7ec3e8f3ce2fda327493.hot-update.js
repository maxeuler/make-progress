webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TaskForm.js":
/*!********************************!*\
  !*** ./components/TaskForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ProgressForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProgressForm */ "./components/ProgressForm.js");







var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/make-progress/frontend/components/TaskForm.js";




var TaskForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TaskForm, _Component);

  function TaskForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TaskForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TaskForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      title: '',
      unit: '',
      units: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TaskForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProgressForm__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        method: "POST",
        onSubmit: function onSubmit(e) {
          e.preventDefault();

          _this2.props.createTask(_this2.state);

          _this2.setState({
            title: '',
            unit: '',
            units: 0
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Title", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Read 'Harry Potter'",
        onChange: this.onChange,
        value: this.state.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Which Unit?", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "unit",
        placeholder: "Chapters",
        onChange: this.onChange,
        value: this.state.unit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "units",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "How many Units?", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "number",
        name: "units",
        placeholder: "12",
        onChange: this.onChange,
        value: this.state.units,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Create"));
    }
  }]);

  return TaskForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TaskForm);

/***/ })

})
//# sourceMappingURL=index.js.7ec3e8f3ce2fda327493.hot-update.js.map