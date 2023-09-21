import { Router } from "express";
import { getCods } from "../controller/CodigosController.js";

const routesCod = Router();

routesCod.get('/codigos', getCods);

export default routesCod;