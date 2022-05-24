const express = require("express");
const router = express.Router();
const {getAsanas} = require ("../controlls/asanas")

const asanas = ["vriksana", "parvatasana", "setubandasana", "shavasana"];

router.get("/", getAsanas);

module.exports = router;