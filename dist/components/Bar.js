"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Bar = _ref => {
  let {
    language,
    textColor
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("section", null, language === "fa" ? /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      color: textColor
    }
  }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u0632\u0645\u0627\u0646") : /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      color: textColor
    }
  }, "Select Time"));
};
var _default = exports.default = Bar;