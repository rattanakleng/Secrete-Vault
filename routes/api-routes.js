// Dependencies
const express = require("express");
const router = express.Router();

// Requiring todo model
const db = require("../models");


module.exports = (app) => {

    // Routes
    // Api route for reading passwords table
    app.get("/api/password", (req, res) => {
        // GET route for getting all of passwords
        db.Password.findAll({})
            .then(function (dbPasswords) {
                res.json(dbPasswords);
            });
    });

    //Api route for saving a password
    app.post("/api/password/post", (req, res) => {
        // console.log(req.body);
        db.Password.create(req.body)
            .then((dbPasswords) => {
                res.json(dbPasswords);
            });
    });


    // Function delete
    app.delete("/api/password/delete/:id", function (req, res) {
        db.Password.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbPassword) => {
            res.json(dbPassword);
        });
    });




    // Api route for updating a password
    app.put("/api/password/update/:id", (req, res) => {
        console.log(req.body)
        db.Password.update(
           req.body, 
           {
            where: {
                id: req.params.id
            }
        }).then((dbPassword) => {
            // console.log("This is" + dbPassword);
            res.json(dbPassword);
        });
    });
}


// app.put( "/post/:id", (req, res) =>
// db.post.update({
//   title: req.body.title,
//   content: req.body.content
// },
// {
//   where: {
//     id: req.params.id
//   }
// }).then( (result) => res.json(result) )
// );



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


