const express = require("express");
const axios = require("axios");
const router = express.Router();


  router.get("/", async (req, res) => {
    
    const pokemons = await axios(`https://pokeapi.co/api/v2/pokemon/`);
      
    const arrayPokemons =  pokemons.data.results;

    const nombresPokemons  = []

    for (let i = 0; i < arrayPokemons.length; i++) {

        nombresPokemons.push(arrayPokemons[i].name);
        
    }

    return res.send(nombresPokemons);

  });





module.exports = router;