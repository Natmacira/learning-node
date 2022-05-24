const express = require("express");

const router = express.Router();

const usuarios = [
    {
        "id": 1,
        "nombre": "Ronal",
        "apellido": "Dinho",
        "edad": 42,
    },
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


router.get('/', (req, res) => {
    res.send(usuarios);
    console.log(usuarios);

});


router.post("/", (req, res, next) => {
  try {
    const newUser = req.body;
    if (newUser.nombre && newUser.apellido) {
      usuarios.push(newUser);
      return res.send({ success: true, data: newUser, message: "All good!" });
    } else {
      return res.send({ success: false, data: [], message: "Faltan campos" });
    }
  } catch (error) {
    return next(error);
  }
});




 router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, edad } = req.body;

  const index = usuarios.findIndex((u) => u.id === id);

  if (index >= 0) {
    usuarios[index].nombre = nombre;
    usuarios[index].edad = edad;
    return res.send({ data: usuarios, message: "Actualizado" });
  }

  return res.send({ message: "No se encontró el id" });
});

module.exports = router;