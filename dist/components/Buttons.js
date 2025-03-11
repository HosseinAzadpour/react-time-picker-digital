"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Buttons = _ref => {
  let {
    textColor,
    data,
    cancelPage,
    confirmPage,
    language,
    activeHour,
    activeMinute
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "fixed bottom-0 left-0 h-[10vh] w-screen flex items-center justify-center gap-[20vw]"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: `${confirmPage}`,
    className: "flex items-center justify-center",
    style: {
      color: textColor
    },
    onClick: () => {
      data({
        hour: activeHour,
        minute: activeMinute
      });
    }
  }, language === "fa" ? "تایید" : "Confirm"), /*#__PURE__*/_react.default.createElement("a", {
    href: `${cancelPage}`,
    className: "flex items-center justify-center",
    style: {
      color: textColor
    }
  }, language === "fa" ? "لغو" : "Cancel"));
};
var _default = exports.default = Buttons;