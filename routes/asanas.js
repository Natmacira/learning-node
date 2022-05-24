const express = require("express");
const router = express.Router();

const asanas = ["vriksana", "parvatasana", "setubandasana", "shavasana"];

router.get('/', (req, res)=> {
    res.send('Hola, mundo, acá probando el nodemon!! probando run dev....y vienen las asanas:  ' +  asanas);
    console.log(asanas);
 
});

module.exports = router;