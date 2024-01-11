import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { conn } from "../connection.js";
import { token } from "morgan";


export const getUsers = async (req, res) => {
  try{
    const bd = await conn();
    const [rows] = await bd.query('SELECT * FROM devices')
    console.log(rows)
    res.status(200).json(rows)
  }catch(err){
    console.log('Error login: ', err)
  }
}


export const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
  
    if (!token) {
      return res.json({ Error: "No estás autenticado" });
    } else {
      jwt.verify(token, "clave-secreta", (err, decoded) => {
        if (err) {
          return res.json({ Error: "Token inválido" });
        } else {
          req.nombre = decoded.nombre;
          next();
        }
      });
    }
  
  
  /* try{
    const token = req.cookies.token
    console.log(token);
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
  }catch(err){
    console.log("Error al verificar usuario: ", err)
  } */
}

export const verifyToken = (req, res) => {
  try {
    const {token} = req.body
    jwt.verify(token, 'clave-secreta', (err, decoded) => {
      if (err) {
        console.log(err)
      }
      res.status(200).json({data: decoded, message: 'Verific'})
    })
  } catch (err) {
    console.log(err)
  }
}

export const authLogin = (req, res) => {
  try{
    return res.json({Status: "Success", nombre: req.nombre})
  }catch(err){
    console.log("Error al autorizar: ", err)
  }
}

export const loginUser = async (req, res) => {
  try{
    
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
      const rol = user.rol
      const token = jwt.sign({nombre, rol}, "clave-secreta", {expiresIn: "1d"})
      //res.cookie("token", token)
      res.cookie("token", token, { httpOnly: true });
      console.log("token: ", token)
      // console.log(results);
      return res
        .status(200)
        .json({ Status: "Autenticación exitosa", usuario: user, token });
    } else {
      console.log("Contraseña incorrecta");
      console.log(user.contrasena)
      return res.status(401).json({ Error: "Contraseña incorrecta." });
    }
    // } catch (err) {
    //     console.log("Error al buscar usuario:", err);
    //     return res.status(500).json({ Error: "Error al buscar el usuario." });
    // }
  }catch(err){
    console.log("Error al loguear: ", err)
  }
};

export const userLogout = (req, res) => {
  try{
    console.log(req.cookies.token)
    res.clearCookie('token')
    return res.json({Status: 'Success'})
  }catch(err){
    console.log("Error al salir: ", err)
    return res.status(500).json({ Error: 'Error al cerrar sesión' })
  }
}
