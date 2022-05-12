const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cheeseSchema = Schema({

    name: String,
    countryOfOrigin: String,
    image: String

});

const Cheese = mongoose.model("Cheese", cheeseSchema);
module.exports = Cheese;