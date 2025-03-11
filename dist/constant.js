"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Minutes_60 = exports.Minutes = exports.Hours_24 = exports.Hours = void 0;
const Hours_24 = exports.Hours_24 = Array.from({
  length: 24
}, (_, i) => String(i).padStart(2, "0"));
const Minutes_60 = exports.Minutes_60 = Array.from({
  length: 60
}, (_, i) => String(i).padStart(2, "0"));
const Hours = exports.Hours = Array(8).fill(Hours_24).flat();
const Minutes = exports.Minutes = Array(8).fill(Minutes_60).flat();