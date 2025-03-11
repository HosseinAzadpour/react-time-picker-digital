"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _constant = require("../constant");
var _clsx = _interopRequireDefault(require("clsx"));
var _Selector = _interopRequireDefault(require("./Selector"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HourContainer = _ref => {
  let {
    hourEl,
    hourSelector,
    activeHour,
    setActiveHour,
    language,
    activeColor,
    textColor,
    numbersColor
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col items-center justify-start gap-[5vh] overflow-hidden"
  }, language === "fa" ? /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      color: textColor
    }
  }, "\u0633\u0627\u0639\u062A") : /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      color: textColor
    }
  }, "Hour"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      scrollSnapType: "y mandatory"
    },
    className: "relative  flex flex-col items-center justify-start h-[45vh] w-[30vw] whitespace-nowrap overflow-y-auto overflow-x-hidden gap-[4vh]  duration-300",
    ref: hourEl
  }, _constant.Hours.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("h4", {
      key: `hourTimePicker-${index}`,
      id: "hour",
      style: {
        scrollSnapAlign: "center",
        scrollSnapStop: "normal",
        color: activeHour == item ? activeColor : numbersColor
      },
      className: (0, _clsx.default)("scroll-snap w-full flex justify-center items-center !text-[9vh] duration-300  border-b border-gray-400", activeHour === item ? "!cursor-default" : "!cursor-pointer", index === 0 ? "pt-[16.9vh]" : "", index + 1 === _constant.Hours.length ? "mb-[17vh]" : ""),
      onClick: () => {
        setActiveHour(item);
      }
    }, item);
  })), /*#__PURE__*/_react.default.createElement(_Selector.default, {
    selector: hourSelector
  }));
};
var _default = exports.default = HourContainer;