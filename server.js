// Dependencie
const express = require("express");

// Setup express app
const app = express();
const PORT = process.env.PORT || 8080;

// Required models for syncing
const db = require("./models");


// Setup express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Static directory
app.use(express.static("public"));


// Route


// Port listener
app.listen(PORT, () => {
    console.log("App listening on PORT" + PORT);
});