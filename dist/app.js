"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _lector = _interopRequireDefault(require("./routes/lector.js"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _codigos = _interopRequireDefault(require("./routes/codigos.js"));
var _login = _interopRequireDefault(require("./routes/login.js"));
var _productos = _interopRequireDefault(require("./routes/productos.js"));
var _register = _interopRequireDefault(require("./routes/register.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerUI from "swagger-ui-express";
// import { options } from "./swaggerOptions.js";
var app = (0, _express["default"])();
// const specs = swaggerJSDoc(options);

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_lector["default"]);
app.use(_codigos["default"]);
app.use(_login["default"]);
app.use(_productos["default"]);
app.use(_register["default"]);
// app.use('/docs', swaggerUI.server, swaggerUI.setup(specs));
var _default = app;
exports["default"] = _default;