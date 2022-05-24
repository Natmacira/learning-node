const express = require("express");

const router = express.Router();
const {getPokemons} = require ("../controlls/pokemons")


  router.get("/", getPokemons); 



module.exports = router;