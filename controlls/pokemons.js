const axios = require("axios");


const getPokemons = async (req, res, next) => {
    try {
        const pokemons = await axios(`https://pokeapi.co/api/v2/pokemon/`);
      
        const arrayPokemons =  pokemons.data.results;
    
        const nombresPokemons  = []
    
        for (let i = 0; i < arrayPokemons.length; i++) {
    
            nombresPokemons.push(arrayPokemons[i].name);
            
        }
    
        return res.send(nombresPokemons);
    
      
       
    } catch (error) {
        return next(error)
    }


}


    


module.exports = {getPokemons};