const express = require ("express");
const asanasRoutes = require("./routes/asanas");
const tareasRoutes = require  ("./routes/tareas");
const tareasUsuariosRoutes = require ("./routes/tareausuarios");
const repositoriosRoutes = require ("./routes/repositorios");
const pokemonsRoutes = require ("./routes/pokemons");
const blastoiseRoutes = require ("./routes/blastoise");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", asanasRoutes);
app.use("/tareas", tareasRoutes);
app.use("/tareas-usuarios", tareasUsuariosRoutes);
app.use("/repositorios", repositoriosRoutes);
app.use("/pokemons", pokemonsRoutes);
app.use("/blastoise", blastoiseRoutes);

app.listen(PORT, () => console.log("Ejecutando aplicación ..."));