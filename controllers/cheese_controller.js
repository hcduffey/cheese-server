const express = require('express');
const router = express.Router();

const Cheese = require('../models/Cheese');

router.get("/seed", async (req, res) => {
    try {
        await Cheese.insertMany([
            {name: "American", countryOfOrigin: "USA", image:"https://www.cheese.com/media/img/cheese/10-American-Cheese-shutterstock_1610208106.jpg" },
            {name: "Swiss", countryOfOrigin: "Switzerland", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2019%2F04%2FGettyImages-71285433-2000.jpg"}
        ]);
        res.send("Seeded CheeseDB");
    }
    catch(err) { res.json({error: err}) }
});

router.get("/", async (req, res) => {
    try {
        let allCheese = await Cheese.find({});
        res.json(allCheese);        
    }
    catch(err) {
        res.json({error: "Database issue in cheese index"});
    }
});

router.post("/", async (req, res) => {
    try {
        let newCheese = await Cheese.create(req.body);
        res.json({message: newCheese});        
    }
    catch(err) {
        res.json({error: "Database issue in creating a cheese: " + err});
    }
});

router.put("/:id", async (req, res) => {
    try {
        let updatedCheese = await Cheese.updateOne({_id: req.params.id}, req.body);
        res.json({message: updatedCheese});        
    }
    catch(err) {
        res.json({error: "Database issue in cheese index"});
    }
});

router.delete("/:id", async (req, res) => {
    try {
        let deleteCheeseStatus = await Cheese.deleteOne({_id: req.params.id});
        res.json({message: deleteCheeseStatus});        
    }
    catch(err) {
        res.json({error: "Database issue in cheese index"});
    }
});

router.get("/:id", async (req, res) => {
    try {
        let cheese = await Cheese.find({_id: req.params.id});
        res.json(cheese);        
    }
    catch(err) {
        res.json({error: "Database issue in cheese index"});
    }
});

module.exports = router;