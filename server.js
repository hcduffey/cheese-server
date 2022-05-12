const { application } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cheeseController = require('./controllers/cheese_controller');
require('dotenv').config();
require('./config/db.connect');

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/cheeses", cheeseController);
app.get("/", (req, res) => res.send("In home route"));

app.listen(process.env.PORT, () => console.log("server up on port: " + process.env.PORT));

