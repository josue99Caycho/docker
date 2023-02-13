const express = require('express');

// Database
require(`./database/index`);

// Constants
const PORT = 5051;

// Init express
const app = express();

//Middleware config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
const user = require(`./router/user`)

// USE ROUTES
app.use('/api/user', user)

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))