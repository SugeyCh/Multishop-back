import { Router } from "express";

const RouterTest = Router();

RouterTest.get('/test', async(req, res) => {
    try{
        if(res.status(200)){
            console.log('Éxito')
            return res.status(200).json({Status: 'Success'})
        }else{
            console.log('Fallo al conectarse')
            return res.status(400)
        }
    }catch(error){
        console.log('Error: ', error)
        return res.status(500)
    }
})

export default RouterTest