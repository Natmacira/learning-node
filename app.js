const express = require ("express");
const axios = require("axios");

const app = express();

const PORT = 3000;

const asanas = require  ("./asanas");

app.get('/', (req, res)=> {
    res.send('Hola, mundo, acá probando el nodemon!! probando run dev....y vienen las asanas:  ' +  asanas);
    console.log(asanas);
 
});

app.get("/repositorios/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await axios(`https://api.github.com/users/${userId}`);
  
    const repos = await axios(response.data.repos_url);
  
    return res.send(response.data);
  } catch(error) {}
  });

  app.get("/pokemons", async (req, res) => {
    
    const pokemons = await axios(`https://pokeapi.co/api/v2/pokemon/`);
      
    const arrayPokemons =  pokemons.data.results;

    const nombresPokemons  = []

    for (let i = 0; i < arrayPokemons.length; i++) {

        nombresPokemons.push(arrayPokemons[i].name);
        
    }

    return res.send(nombresPokemons);

  });

  app.get("/blastoise", async (req, res) => {

    const response = await axios(`https://pokeapi.co/api/v2/pokemon/9/`);
      
    return res.send(response.data);
});


app.listen(PORT, () => console.log("Ejecutando aplicación ahora con run dev y funciona bichis, yeeeeyy..."));