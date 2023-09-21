import express from "express";
import cors from 'cors';
import morgan from "morgan";
// import jwt from "jsonwebtoken";
// import bcrypt from 'bcrypt';
import cookieParser from "cookie-parser";
import routesLec from './routes/lector.js'
import routesCod from "./routes/codigos.js";
import routesLog from "./routes/login.js"; 
import routesProd from "./routes/productos.js";
import routesReg from "./routes/register.js";
import RouterTest from "./routes/prueba.js";
// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerUI from "swagger-ui-express";
// import { options } from "./swaggerOptions.js";

const app = express();
// const specs = swaggerJSDoc(options);

app.use(cors({
    origin: ["*"],
    methods: ["POST", "GET"],
    credentials: true
}))
app.use(cookieParser())
app.use(morgan("dev"));
app.use(express.json());
app.use(routesLec);
app.use(routesCod);
app.use(routesLog);
app.use(routesProd);
app.use(routesReg);
app.use(RouterTest)
// app.use('/docs', swaggerUI.server, swaggerUI.setup(specs));

export default app; 