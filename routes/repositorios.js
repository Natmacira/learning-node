const express = require("express");
const axios = require("axios");
const router = express.Router();



router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await axios(`https://api.github.com/users/${userId}`);
  
    const repos = await axios(response.data.repos_url);
  
    return res.send(response.data);
  } catch(error) {}
  });

  module.exports = router;