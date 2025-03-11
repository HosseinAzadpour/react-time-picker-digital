"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _constant = require("./constant");
var _useTimeScroller = require("./hooks/useTimeScroller");
var _useScrollHandler = require("./hooks/useScrollHandler");
var _Bar = _interopRequireDefault(require("./components/Bar"));
var _MinuteContainer = _interopRequireDefault(require("./components/MinuteContainer"));
var _HourContainer = _interopRequireDefault(require("./components/HourContainer"));
var _Buttons = _interopRequireDefault(require("./components/Buttons"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TimePicker = _ref => {
  let {
    data,
    cancelPage = "/",
    confirmPage = "/",
    language = "en",
    activeColor = "orange",
    backgroundColor = "black",
    textColor = "white",
    numbersColor = "gray"
  } = _ref;
  const minuteEl = (0, _react.useRef)(null);
  const minuteSelector = (0, _react.useRef)(null);
  const hourEl = (0, _react.useRef)(null);
  const hourSelector = (0, _react.useRef)(null);
  var [activeHour, setActiveHour] = (0, _react.useState)();
  var activeHourIndx = 59;
  var activeMinuteIndx = 299;
  var [activeMinute, setActiveMinute] = (0, _react.useState)();
  (0, _useTimeScroller.useTimeScroller)({
    hourEl,
    minuteEl,
    activeHourIndx,
    activeMinuteIndx,
    activeColor,
    backgroundColor,
    numbersColor,
    textColor
  });
  (0, _useScrollHandler.useScrollHandler)({
    hourEl,
    minuteEl,
    hourSelector,
    minuteSelector,
    setActiveHour,
    setActiveMinute,
    Hours: _constant.Hours,
    Minutes: _constant.Minutes
  });
  return /*#__PURE__*/_react.default.createElement("main", {
    dir: language === "fa" ? "rtl" : "ltr",
    style: {
      backgroundColor: backgroundColor
    },
    className: `timePicker  overflow-hidden h-screen w-screen pt-[5vh] px-[1.5vh] flex flex-col justify-start gap-[10vh]`
  }, /*#__PURE__*/_react.default.createElement(_Bar.default, {
    language: language,
    textColor: textColor
  }), /*#__PURE__*/_react.default.createElement("section", {
    className: " w-full h-[55vh] flex items-center justify-center overflow-hidden gap-[10vh] "
  }, /*#__PURE__*/_react.default.createElement(_HourContainer.default, {
    hourEl: hourEl,
    hourSelector: hourSelector,
    activeHour: activeHour,
    setActiveHour: setActiveHour,
    language: language,
    activeColor: activeColor,
    textColor: textColor,
    numbersColor: numbersColor
  }), /*#__PURE__*/_react.default.createElement(_MinuteContainer.default, {
    minuteEl: minuteEl,
    activeMinute: activeMinute,
    minuteSelector: minuteSelector,
    setActiveMinute: setActiveMinute,
    language: language,
    activeColor: activeColor,
    textColor: textColor,
    numbersColor: numbersColor
  })), /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    data: data,
    cancelPage: cancelPage,
    confirmPage: confirmPage,
    language: language,
    activeHour: activeHour,
    activeMinute: activeMinute,
    textColor: textColor
  }));
};
var _default = exports.default = TimePicker;