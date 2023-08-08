const express = require('express');
require('dotenv').config();
const cors = require('cors')
const corsOptions = require('./controllers/funciones')

//Crear servidor Express
const app = express();

//Base de datos
//dbConnection();
// corsOptions;
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

//Directorio público.
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

//TODO: auth // crear, login, renew
app.use('/impresoras', require('./routes/impresoras'));

//TODO: CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})