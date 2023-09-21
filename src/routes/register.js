import { Router } from "express";
import {postUser} from '../controller/RegisterController.js'

const routesReg = Router();

routesReg.post('/register', postUser);

export default routesReg;