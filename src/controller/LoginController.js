import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { conn } from "../connection.js";
import { token } from "morgan";


export const getUsers = async (req, res) => {
  const bd = await conn();
  const [rows] = await bd.query('SELECT * FROM devices')
  console.log(rows)
  res.status(200).json(rows)
}


export const verifyUser = (req, res, next) => {
 const token = req.cookies.token
 if(!token){
  return res.json({Error: "No estás autenticado"})
 }else{
  jwt.verify(token, "clave-secreta", (err, decoded) => {
    if(err){
      return res.json({Error: "Token inválido"})
    }else{
      req.nombre = decoded.nombre
      next()
    }
  })
 }
}

export const authLogin = (req, res) => {
  return res.json({Status: "Success", nombre: req.nombre})
}

export const loginUser = async (req, res) => {
  const bd = await conn();
  const { nombre, contrasena } = req.body;
  const [results] = await bd.query("SELECT * FROM devices WHERE nombre = ?", [
    nombre,
  ]);
  console.log(results);

  // await new Promise(resolve => setTimeout(resolve, 3000));

  if (results.length === 0) {
    console.log("Usuario no encontrado");
    console.log(results);
    return res.status(401).json({ Error: "Usuario no encontrado." });
  }

  const user = results[0];

  if (contrasena === user.contrasena) {
    console.log("Autenticación exitosa");
    const nombre = user.nombre
    const token = jwt.sign({nombre}, "clave-secreta", {expiresIn: "1d"})
    res.cookie("token", token)
    console.log("token: ", token)
    // console.log(results);
    return res
      .status(200)
      .json({ Status: "Autenticación exitosa", usuario: user });
  } else {
    console.log("Contraseña incorrecta");
    console.log(user.contrasena)
    return res.status(401).json({ Error: "Contraseña incorrecta." });
  }
  // } catch (err) {
  //     console.log("Error al buscar usuario:", err);
  //     return res.status(500).json({ Error: "Error al buscar el usuario." });
  // }
};

export const userLogout = (req, res) => {
  res.clearCookie('token')
  return res.json({Status: 'Success'})
}
