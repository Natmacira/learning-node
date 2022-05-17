const express = require ("express");

const app = express();

const PORT = 3000;

const asanas = require  ("./asanas");

app.get('/', (req, res)=> {
    res.send('Hola, mundo, acá probando el nodemon!! a ver si sigue funcionando....y vienen las asanas:  ' +  asanas);
    console.log(asanas);
 
});

app.listen(PORT, () => console.log("Ejecutando aplicación..."));