// Dependencies
const express = require("express");
const router = express.Router();

// Requiring todo model
const db = require("../models");


module.exports = (app) => {

    // Routes
// Api route for reading passwords table
app.get("/api/passwords", function(req, res) {
    // GET route for getting all of passwords
    db.Passwords.findAll({})
    .then(function(dbPasswords) {
        res.json(dbPasswords);
    });
});

//Api route for saving a password
app.post("/api/posts", (req, res) => {
    db.Passwords.create(req.body)
    .then((dbPasswords) => {
        res.json(dbPasswords);
    });
});


}


// // Routes
// // Api route for reading passwords table
// router.get("/api/passwords", function(req, res) {
//     // GET route for getting all of passwords
//     db.Passwords.findAll({})
//     .then(function(dbPasswords) {
//         res.json(dbPasswords);
//     });
// });

// //Api route for saving a password
// router.post("/api/posts", (req, res) => {
//     db.Passwords.create(req.body)
//     .then((dbPasswords) => {
//         res.json(dbPasswords);
//     });
// });

    
   