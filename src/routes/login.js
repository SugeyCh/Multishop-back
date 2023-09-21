import { Router } from "express";
import { authLogin, loginUser, verifyUser, userLogout, getUsers } from "../controller/LoginController.js";


const routesLog = Router();

routesLog.get('/', verifyUser, authLogin)

routesLog.post('/login', loginUser);

routesLog.get('/login', getUsers);

routesLog.get('/logout', userLogout)

export default routesLog;