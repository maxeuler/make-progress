webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Task.js":
/*!****************************!*\
  !*** ./components/Task.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ProgressForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ProgressForm */ "./components/ProgressForm.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar.js");
/* harmony import */ var _TaskDetails__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TaskDetails */ "./components/TaskDetails.js");














var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/make-progress/frontend/components/Task.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13__["default"])(["\n\tbackground: none;\n\tborder: 1px solid ", ";\n\tborder-radius: 3px;\n\tcolor: ", ";\n\tmargin-left: 2rem;\n\tfont-size: 1.5rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13__["default"])(["\n\tmargin: 2rem 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13__["default"])(["\n\twidth: 40px;\n\theight: 40px;\n\tmargin-right: 4rem;\n\tbackground: none;\n\tborder: 1px solid ", ";\n\tborder-radius: 20px;\n\tcolor: ", ";\n\tfont-size: 2rem;\n\tcursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13__["default"])(["\n\tdisplay: flex;\n\theight: 50px;\n\tjustify-content: space-between;\n\talign-items: center;\n\tcursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13__["default"])(["\n\twidth: 90%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tcursor: pointer;\n\tmargin: 1rem;\n\tp {\n\t\tcolor: ", ";\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tfont-size: 2rem;\n\t\tfont-weight: 300;\n\t}\n\t#title {\n\t\tfont-size: 3rem;\n\t\tfont-weight: 400;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var TaskHeader = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div(_templateObject(), function (props) {
  return props.theme.bright;
});
var Progress = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div(_templateObject2());
var AddButton = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].button(_templateObject3(), function (props) {
  return props.theme.bright;
}, function (props) {
  return props.theme.bright;
});
var StyledTask = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].div(_templateObject4());
var DetailsButton = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].button(_templateObject5(), function (props) {
  return props.theme.bright;
}, function (props) {
  return props.theme.bright;
});

var Task =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(Task, _Component);

  function Task() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Task);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(Task)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "state", {
      showForm: false,
      showDetails: false,
      segments: _this.props.task.segments
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "toggleForm", function () {
      _this.setState(function (prevState) {
        return {
          showForm: !prevState.showForm
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "addProgress",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(units, description) {
        var task, taskPromise, segmentPromise, _ref2, _ref3, taskRes, segmentRes, updatedSegments;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                task = _this.props.task;

                if (task.finishedUnits + units > task.units) {
                  units = task.units - task.finishedUnits;
                }

                _this.props.task.finishedUnits = task.finishedUnits + units;

                _this.toggleForm();

                taskPromise = axios__WEBPACK_IMPORTED_MODULE_16___default.a.post('http://localhost:8888/api/addSegments', {
                  finishedUnits: units,
                  task: _this.props.task._id
                });
                segmentPromise = axios__WEBPACK_IMPORTED_MODULE_16___default.a.post('http://localhost:8888/api/createSegment', {
                  units: units,
                  description: description,
                  task: task._id
                });
                _context.next = 8;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.all([taskPromise, segmentPromise]);

              case 8:
                _ref2 = _context.sent;
                _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, 2);
                taskRes = _ref3[0];
                segmentRes = _ref3[1];
                updatedSegments = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.segments), [_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, segmentRes.data)]);

                _this.setState({
                  segments: updatedSegments
                }); // TODO handle errors


              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "toggleDetails", function (e) {
      if (e.target.name === 'addButton') return;

      _this.setState(function (prevState) {
        return {
          showDetails: !prevState.showDetails
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Task, [{
    key: "render",
    value: function render() {
      var task = this.props.task;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(StyledTask, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(TaskHeader, {
        onClick: this.toggleDetails,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", {
        id: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, task.title), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(DetailsButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Show Details")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, task.finishedUnits, " von ", task.units, " ", task.unit)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Progress, {
        onClick: this.toggleDetails,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_18__["default"], {
        finishedUnits: task.finishedUnits,
        units: task.units,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), task.finishedUnits !== task.units && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(AddButton, {
        name: "addButton",
        onClick: this.toggleForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "+")), this.state.showForm && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_ProgressForm__WEBPACK_IMPORTED_MODULE_17__["default"], {
        addProgress: this.addProgress,
        task: task,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), this.state.showDetails && (this.state.segments.length ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_TaskDetails__WEBPACK_IMPORTED_MODULE_19__["default"], {
        segments: this.state.segments,
        unit: task.unit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(TaskHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", {
        id: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "You have to do something first \uD83C\uDFCC\uD83C\uDFFC\u200D"))));
    }
  }]);

  return Task;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Task);

/***/ })

})
//# sourceMappingURL=index.js.2eba339d429bee04a771.hot-update.js.map