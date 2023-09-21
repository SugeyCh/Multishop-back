"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _LectorController = require("../controller/LectorController.js");
var routesLec = (0, _express.Router)();
routesLec.get('/lector/:chijo', _LectorController.getProd);
routesLec.post('/lector', _LectorController.postProduct);
var _default = routesLec;
exports["default"] = _default;