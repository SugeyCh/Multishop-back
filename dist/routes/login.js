"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _LoginController = require("../controller/LoginController.js");
var routesLog = (0, _express.Router)();
routesLog.get('/', _LoginController.verifyUser, _LoginController.authLogin);
routesLog.post('/login', _LoginController.loginUser);
routesLog.get('/login', _LoginController.getUsers);
routesLog.get('/logout', _LoginController.userLogout);
var _default = routesLog;
exports["default"] = _default;