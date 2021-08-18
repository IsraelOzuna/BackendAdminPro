// npm run start:dev
require('dotenv').config();

const express = require('express');
const cors = require('cors');


const {dbConnection} = require('./database/config');

// Crear servicor express
const app = express();

//Configurar CORS
app.use(cors());

//Lectura y parseo del body
app.use( express.json() );

//Conexion a BD
dbConnection();

//Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});
