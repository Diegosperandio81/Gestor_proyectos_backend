import express from "express";

const router = express.Router();

import {
    registrar,
    autenticar,
    confirmar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    perfil,

} from '../controllers/usuarioController.js';

import checkAuth from '../middleware/checkAuth.js';

//Autenticacion, Registro y Confirmacion de Usuarios
router.post('/', registrar); //crea un nuevo usuario
router.post('/login', autenticar);//autenticar un usuario
router.get('/confirmar/:token', confirmar);//confirmar un usuario
router.post('/olvide-password', olvidePassword);//permite generar un nuevo token para posteriormente generar un nuevo password al usuario

//Al tener dos rutas iguales que solon cambian la funcion....
//router.get('/olvide-password/:token', comprobarToken) //permite comprobar el token del usuario para generar un nuevo password
//router.post('/olvide-password/:token', nuevoPassword) //permite generar un nuevo password al usuario

//....puedo reemplazar por lo siguiente:
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

router.get('/perfil', checkAuth, perfil );




export default router;