"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _RegisterController = require("../controller/RegisterController.js");
var routesReg = (0, _express.Router)();
routesReg.post('/register', _RegisterController.postUser);
var _default = routesReg;
exports["default"] = _default;