const express = require("express");
const axios = require("axios");
const router = express.Router();

  router.get("/", async (req, res) => {

    const response = await axios(`https://pokeapi.co/api/v2/pokemon/9/`);
      
    return res.send(response.data);
});

module.exports = router;