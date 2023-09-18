const { response } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware para verificar el token JWT
const verifyToken = (req, res = response, next) => {

    // Obtén el token del encabezado de la solicitud
    let token = req.header('Authorization');
    token = token.replace(/^Bearer\s+/, "");

    // Verifica si el token existe
    if (!token) {

        return res.status(401).json({
            ok: false,
            msg: 'Acceso no autorizado. Token no proporcionado.'
        });

    }

    try {
        // Verifica el token
        const { username, iat, exp } = jwt.verify(token, process.env.JWT_SECRET);

        res.json({
            verificado: true,
            username,
            iat,
            exp
        })
        next();
        // Verifica el token
        // const payload = jwt.verify(token, process.env.JWT_SECRET);

    } catch (error) {

        return res.status(401).json({
            ok: false,
            msg: 'Acceso no autorizado. Token inválido.'
        });
    }

}

module.exports = {
    verifyToken
}

