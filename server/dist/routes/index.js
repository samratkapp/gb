"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("../component/books/index"));
var _response = _interopRequireDefault(require("../config/response"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
/* GET  page. */
router.get('/', function (req, res, next) {
  res.send({
    statusCode: 200,
    title: 'Express11'
  });
});
router.use('/books', _index["default"]);
router.use('/*', function (req, res) {
  _response["default"].notFound(res, 'Not Found!');
});
var _default = router;
exports["default"] = _default;