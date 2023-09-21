import { Router } from "express";
import {getProds, getReg} from '../controller/ProductosController.js'

const routesProd = Router();

routesProd.get('/productos', getProds);

routesProd.get('/productos/:chijo', getReg);

export default routesProd;