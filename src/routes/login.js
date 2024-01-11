import { Router } from "express";
import { authLogin, loginUser, verifyUser, userLogout, getUsers, verifyToken } from "../controller/LoginController.js";


const routesLog = Router();

routesLog.get('/', verifyUser, authLogin)

routesLog.post('/login', loginUser);

routesLog.get('/login', getUsers);

routesLog.post('/verifyToken', verifyToken)

routesLog.get('/logout', userLogout)

export default routesLog;