"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Selector = _ref => {
  let {
    selector
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute opacity-0 bg-slate-500 rounded-sm  -translate-y-1/2 top-[55%] h-[2vh] w-[32vw]",
    ref: selector
  });
};
var _default = exports.default = Selector;