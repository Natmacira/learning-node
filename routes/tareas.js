const express = require("express");
const router = express.Router();

const tareas = [
    {
        id: 1,
        nombre: "Despertarse",
        prioridad: "alta",
    },
    {
        id: 2,
        nombre: "Desayunar",
        prioridad: "media",
    },
    {
        id: 3,
        nombre: "Trabajar",
        prioridad: "baja",
    },
    {
        id: 4,
        nombre: "Dormir",
        prioridad: "alta",
    },
];

router.get("/", (req, res) => {
    res.send(tareas);
    console.log(tareas)
});

router.post("/", (req, res, next) => {
try {
  const newTask = req.body;
  if (newTask.nombre && newTask.prioridad) {
    tareas.push(newTask);
    return res.send(tareas);
  } else {
    return res.send("faltan campos")
  }
} catch (error) {
  return next(error);
}

});



module.exports = router;

