/* 
Rutas de usuarios / Auth
host + /login
*/

const { Router, response } = require('express');
const { generarJWT, myAsyncAuthorizer } = require('../helpers/jwt')
const { verifyToken } = require('../middlewares/validarJwt')

const router = Router();

router.post('/', async (req, res = response) => {

    try {
        // Realiza la autenticación y verifica las credenciales aquí
        const isAuthorized = await myAsyncAuthorizer(req.body.email, req.body.password);
        console.log(isAuthorized)

        if (isAuthorized) {
            // Si las credenciales son válidas, genera el token
            const token = await generarJWT(req.body.email);

            // Envía el token en la respuesta JSON
            res.json({
                ok: true,
                msg: "la autenticación se ha hecho correcta",
                token
            });
        } else {
            // Si las credenciales son inválidas, envía un mensaje de error
            res.status(401).json({
                ok: false,
                error: 'Credenciales inválidas'
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            error: 'Error en la autenticación'
        });
    }
});


router.get('/verificarToken', verifyToken);

module.exports = router;
