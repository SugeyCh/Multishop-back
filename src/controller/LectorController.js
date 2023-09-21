import { conn } from "../connection.js";
import colors from "colors";

export const getProd = async (req, res) => {
    const bd = await conn();
    const [consult] = await bd.query(
      "SELECT s.codigo, s.descrip, FLOOR(s.existencia) AS existencia, ROUND(p.precio1, 2) AS precio1 FROM calternos c JOIN sinv s ON c.cpadre = s.codigo JOIN detallepr p ON s.codigo = p.codigo WHERE c.chijo = ?",
      [req.params.chijo]
    );
    res.status(200).json(consult);
}

export const postProduct = async (req, res) => {
    try{
        const bd = await conn();
        await bd.query('INSERT INTO movements(user, cod_prod, conteo) VALUES (?, ?, ?)', 
        [req.body.user, 
        req.body.cod_prod, 
        req.body.conteo]);
        const [consul] = await bd.query('SELECT * FROM movements');
        if(res.status(200)){
            res.json(consul);
            console.log('Producto registrado correctamente'.bgGreen.black);
        }else{
            console.log('Error al registrar'.bgRed.white);
        }
    }catch(err){
        console.log('Error al consultar. ', err)
    }
}