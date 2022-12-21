"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _helmet = _interopRequireDefault(require("helmet"));
var _compression = _interopRequireDefault(require("compression"));
var _index = _interopRequireDefault(require("./routes/index.js"));
var _handleExeption = require("./middleware/error/handleExeption.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// var express = require('express');

// var path = require('path');

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
// compress all responses
app.use((0, _compression["default"])());
app.get('/ping', function (req, res, next) {
  res.send("{\n        \"status\": \"OK\",\n        \"status_code\": 200  \n    }");
});
app.use('/', _index["default"]);

// error handler
app.use(function (err, req, res) {
  console.error(err.stack);
});
(0, _handleExeption.handleExeption)();
var _default = app;
exports["default"] = _default;