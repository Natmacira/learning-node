const express = require ("express");

const app = express();

const PORT = 3000;

app.get('/', (req, res)=> {
    res.send('Hola, mundo, acá probando el nodemon!! a ver si sigue funcionando');
});

app.listen(PORT, () => console.log("Ejecutando aplicación..."));