import { conn } from "../connection.js";

export const getProds = async (req, res) => {
    const bd = await conn();
    const [rows] = await bd.query('SELECT codigo, descrip, precio1, existencia FROM sinv')
    if(res.status(200)){
        res.json(rows);
    }else{
        console.log('Error al cargar.'.bgRed.white);
    }
};

export const getReg = async (req, res) => {
    const bd = await conn();
    const [consult] = await bd.query("SELECT s.codigo, s.descrip, s.precio1, s.existencia FROM calternos c JOIN sinv s ON c.cpadre = s.codigo WHERE c.chijo = ?", [req.params.chijo]);
    // Si se encontraron resultados en la consulta
    if (consult.length > 0) {
        res.status(200).json(consult);
    } else {
        // Si no se encontraron resultados
        res.status(404).json({ error: 'Producto no encontrado' });
    };
}