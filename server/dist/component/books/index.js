"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _books = _interopRequireDefault(require("./books.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
/* GET Books listing. */
router.get('/', _books["default"].getBooks);
var _default = router;
exports["default"] = _default;