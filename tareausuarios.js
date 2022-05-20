const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 3001;

const usuarios = [
    {
        "id": 2,
        "nombre": "Na",
        "apellido": "Tinho",
        "edad": 13
    },
    {
        "id": 3,
        "nombre": "Ronal",
        "apellido": "mcdonald",
        "edad": 18
    },
    {
        "id": 4,
        "nombre": "Dinho",
        "apellido": "Saurio",
        "edad": 34
    }
]
usuarios.push(require.body);

app.get('/', (req, res)=> {
    res.send(usuarios);
    console.log(usuarios);
 
});



app.listen(PORT, () => console.log("Je espere que ca marche bien"));
