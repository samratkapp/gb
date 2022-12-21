"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constant = _interopRequireDefault(require("./constant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ResponseBuilder = /*#__PURE__*/function () {
  function ResponseBuilder() {
    _classCallCheck(this, ResponseBuilder);
    _defineProperty(this, "resObject", {
      status: null,
      status_code: null,
      message: null
    });
    _defineProperty(this, "success", function (res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'OK';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var SUCCESS = _constant["default"].httpStatusCode.SUCCESS;
      res.status(SUCCESS).send({
        statusCode: SUCCESS,
        message: message,
        data: data
      });
    });
    _defineProperty(this, "created", function (res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var CREATED = _constant["default"].httpStatusCode.CREATED;
      res.status(CREATED).send({
        statusCode: CREATED,
        message: message,
        data: data
      });
    });
    _defineProperty(this, "accepted", function (res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var ACCEPTED = _constant["default"].httpStatusCode.ACCEPTED;
      res.status(ACCEPTED).send({
        statusCode: ACCEPTED,
        message: message,
        data: data
      });
    });
    _defineProperty(this, "notFound", function (res) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var NOT_FOUND = _constant["default"].httpStatusCode.NOT_FOUND;
      res.status(NOT_FOUND).send({
        statusCode: NOT_FOUND,
        message: message,
        data: data
      });
    });
  }
  _createClass(ResponseBuilder, [{
    key: "customResponseObject",
    value: function customResponseObject(type, code, message, data) {
      this.resObject = {
        status: type,
        status_code: code,
        message: message
      };
      if (data) {
        this.resObject.data = data;
      }
      return this.resObject;
    }
  }]);
  return ResponseBuilder;
}();
var _default = new ResponseBuilder();
exports["default"] = _default;