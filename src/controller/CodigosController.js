import { conn } from "../connection.js";

export const getCods = async (req, res) => {
    const bd = await conn();
    const [rows] = await bd.query('SELECT * FROM calternos');
    res.status(200).json(rows);
};