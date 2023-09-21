"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _CodigosController = require("../controller/CodigosController.js");
var routesCod = (0, _express.Router)();
routesCod.get('/codigos', _CodigosController.getCods);
var _default = routesCod;
exports["default"] = _default;