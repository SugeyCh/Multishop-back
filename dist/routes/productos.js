"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ProductosController = require("../controller/ProductosController.js");
var routesProd = (0, _express.Router)();
routesProd.get('/productos', _ProductosController.getProds);
routesProd.get('/productos/:chijo', _ProductosController.getReg);
var _default = routesProd;
exports["default"] = _default;