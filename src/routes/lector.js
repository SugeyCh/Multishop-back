import { Router } from "express";
import {getProd, postProduct} from "../controller/LectorController.js"

const routesLec = Router();

routesLec.get('/lector/:chijo', getProd);

routesLec.post('/lector', postProduct);

export default routesLec;