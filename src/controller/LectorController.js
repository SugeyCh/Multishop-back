import { conn } from "../connection.js";
import colors from "colors";

export const getProd = async (req, res) => {
    try{
        const bd = await conn();
        const [consult] = await bd.query(
          "SELECT s.codigo AS codigo, s.descrip AS descrip, FLOOR(s.existencia) AS existencia, ROUND(p.precio1, 2) AS precio1 FROM calternos c JOIN sinv s ON c.cpadre = s.codigo JOIN detallepr p ON s.codigo = p.codigo WHERE c.chijo = ? UNION ALL SELECT s2.codigo AS codigo, s2.descrip AS descrip, FLOOR(s2.existencia) AS existencia, ROUND(p2.precio1, 2) AS precio1 FROM sinv s2 JOIN detallepr p2 ON s2.codigo = p2.codigo WHERE s2.codigo = ? UNION ALL SELECT s3.codigo AS codigo, s3.descrip AS descrip, FLOOR(s3.existencia) AS existencia, ROUND(p3.precio1, 2) AS precio1 FROM sinv s3 JOIN detallepr p3 ON s3.codigo = p3.codigo WHERE s3.barra = ? ",
          [req.params.chijo, req.params.chijo, req.params.chijo]
        );
        res.json(consult);
    }catch(err){
        console.log('Error: ', err)
    }
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