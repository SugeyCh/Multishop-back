"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var routesLog = (0, _express.Router)();
routesLog.get('/login', function (req, res) {
  res.send('Logueo hecho');
});
var _default = routesLog;
exports["default"] = _default;