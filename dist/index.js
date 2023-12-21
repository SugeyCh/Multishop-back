"use strict";

var _app = _interopRequireDefault(require("./app.js"));
var _colors = _interopRequireDefault(require("colors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = 3000;
var local = 'localhost';
var ip = '192.168.1.2';
_app["default"].listen(port, function (err) {
  if (err) throw err;
  console.log("Server running http://".concat(local, ":").concat(port).bgBlue.black);
});