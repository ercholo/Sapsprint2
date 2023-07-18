const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
//console.log(process.env)

//Crear servidor Express
const app = express();

//Base de datos
//dbConnection();


//Directorio público.
app.use(express.static('public'));

// Lectura y parseo del body

app.use(express.json());

//TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'));
app.use('/impresoras', require('./routes/impresoras'));

//TODO: CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})