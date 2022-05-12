const express = require('express');
const router = express.Router();

const Cheese = require('../models/Cheese');

router.get("/", async (req, res) => {
    try {
        let allCheese = Cheese.find({});
        res.json(allCheese);
    }
    catch(err) {
        res.send("error in cheese index: " + err);
    }
});

module.exports = router;