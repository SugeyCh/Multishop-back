import { conn } from "../connection.js";
import colors from 'colors';

export const postUser = async (req, res) => {
    const bd = await conn();
    await bd.query('INSERT INTO devices(nombre, contrasena, rol) VALUES (?, ?, ?)', 
    [req.body.nombre,
    req.body.contrasena,
    req.body.rol]);
    const [consul] = await bd.query('SELECT * FROM devices');
    if(res.status(200)){
        res.json(consul);
        console.log('Producto registrado correctamente'.bgGreen.black);
    }else{
        console.log('Error al registrar'.bgRed.white);
    }
}



// export const postUser = async (req, res) => {
//     const bd = await conn();
//     const inser = 'INSERT INTO devices(nombre, contrasena, rol) VALUES (?)';
    
//     const values = [
//         req.body.nombre,
//         req.body.contrasena, // Almacenar la contraseña sin encriptación
//         req.body.rol
//     ];

//     bd.query(inser, [values], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ Error: "Error inserting data." });
//         } else {
//             console.log(res.json({ Status: 'Success' }));
//             console.log('Usuario creado correctamente.'.bgGreen.black);
//             return res.status(200).json({ Status: 'Usuario creado correctamente.' });
//         }
//     });
// };
