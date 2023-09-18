const express = require('express');
require('dotenv').config();
const cors = require('cors')
const corsOptions = require('./controllers/funciones')
const { generarJWT, myAsyncAuthorizer } = require('./helpers/jwt')
const basicAuth = require('express-basic-auth')
AD = require('activedirectory');

//Crear servidor Express
const app = express();

// corsOptions;
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

//Directorio público.
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// autenticación BasicAuth
// app.use(basicAuth({
//     authorizer: myAsyncAuthorizer,
//     authorizeAsync: true
// }));

// Definir la ruta de autenticación
app.use('/login', require('./routes/auth'));

//TODO: devolver trabajos y demás trabajos
app.use('/impresoras', require('./routes/impresoras'));

//TODO: CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})