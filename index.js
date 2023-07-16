const express = require('express');
const { exec } = require('child_process');

require('dotenv').config();
//console.log(process.env)



//Crear servidor Express
const app = express();



//Directorio público.
app.use(express.static('public'));

// Lectura y parseo del body

app.use(express.json());

//Rutas
// app.get('/', (req, res) => {
//     res.json({
//         ok: true
//     })
// });

//TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'));
//TODO: CRUD: Eventos


//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})