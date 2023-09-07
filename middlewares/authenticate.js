const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware para verificar el token JWT antes de acceder a las rutas protegidas
const verifyToken = (req, res, next) => {
    // Obtén el token del encabezado de la solicitud
    const token = req.header('Authorization');
    // console.log(`verifyToken ${token}`)
    console.log(req)

    // Verifica si el token existe
    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
    }

    // Verifica el token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Acceso no autorizado. Token inválido.' });
        }
        // Si el token es válido, puedes continuar
        next();
    });
}

module.exports =
{
    verifyToken
}
