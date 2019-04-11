webpackHotUpdate("static\\development\\pages\\disease.js",{

/***/ "./components/Disease/index.js":
/*!*************************************!*\
  !*** ./components/Disease/index.js ***!
  \*************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_disease_amino_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/disease/amino.svg */ "./img/disease/amino.svg");
/* harmony import */ var _img_disease_amino_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_disease_amino_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-server/dynamic */ "./node_modules/next-server/dynamic.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\Sunday\\Documents\\Web Dev\\d2x.medizerva\\components\\Disease\\index.js";




var AminoComponent = next_server_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./amino-acid */ "./components/Disease/amino-acid.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./amino-acid */ "./components/Disease/amino-acid.js")];
    },
    modules: ['./amino-acid']
  }
});

var disease =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(disease, _Component);

  function disease() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, disease);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(disease)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      i: '0'
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(disease, [{
    key: "renderContent",
    value: function renderContent() {
      console.log('i=', this.state.i);

      if (this.state.i == 0) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(AminoComponent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }));
      } else if (this.state.i == 1) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, "XXXXX");
      }
    }
  }, {
    key: "ippp",
    value: function ippp() {
      this.setState({
        i: '1'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "diseasecomponent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "pt-5 pb-5 pl-5 pr-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u0E42\u0E23\u0E04\u0E41\u0E25\u0E30\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-12 col-sm-12 col-md-12 col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-12 col-sm-6 col-md-6 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "disease-content",
        className: "border mt-5 pl-1 pr-1 pt-1 pb-1",
        onClick: this.ippp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-6 col-sm-3 col-md-3 col-lg-2 d-flex justify-content-center align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _img_disease_amino_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
        width: "45px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-6 col-sm-9 col-md-9 col-lg-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        className: "pt-2 pl-2 pb-2 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\u0E01\u0E23\u0E14\u0E2D\u0E30\u0E21\u0E34\u0E42\u0E19")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-12 col-sm-12 col-md-12 col-lg-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.renderContent()))));
    }
  }]);

  return disease;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (disease); // const item = () => {
// 	return (<div>X</div>)
// }
// const loop = () => {
// 	var i=0
// 	while(i<5){
// 		return (<div>{item()}</div>)
// 		i++
// 	}
// }
//export default loop

{
  /* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">ภาวะไม่ทนต่อน้ำตาลแลคโตส</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">อาการแพ้น้ำตาลแลคโตส</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">คออักเสบ</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">ตับอ่อน</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">คอหอย</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">ถุงน้ำตับอ่อน</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">ภาวะไม่ทนต่อน้ำตาลแลคโตส</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">ริดสีดวงทวารหนัก</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">แผลในทางเดินอาหาร</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">ภาวะการย่อยแลคโตสผิดปกติ</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">ภาวะอุจจาระอุดตัน</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">นิ่วในไต</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">ท้องผูก</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">นิ่วในไต</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">เยื่อบุช่องท้องอักเสบ</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">อาการแพ้น้ำตาลแลคโตส</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">โรคกรดไหลย้อน</h5>
  							</div>
  						</div>
  
  						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 pt-2">
  							<div id="disease-content" className="border pl-1 pr-1 pt-1">
  								<h5 className="pt-2 pl-2 pb-2">อาการแพ้น้ำตาลแลคโตส</h5>
  							</div>
  						</div> */
}

/***/ })

})
//# sourceMappingURL=disease.js.c9970fe098af3d7ada29.hot-update.js.map