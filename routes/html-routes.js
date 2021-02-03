//Dependency
const express = require("express");
// const router = express.Router();
const db = require("../models");

module.exports = (app) => {

    //html router for index.handlebar
    app.get("/", (req, res) => {
        res.render("index");
    })

    //html router for view-password.handlebar
    app.get("/view-password", (req, res) => {
        // console.log("Test Route")
        db.Password.findAll({}).then(function (dbPassword) {
            // console.log(dbPassword);
            res.render("view-password", {
                data: dbPassword
            });
        })
    })

    //html route for add-password.handlebar
    app.get("/add-password", (req, res) => {
        res.render("add-password");
    })

    //html route for edit password
    app.get("/update-password/:id", (req, res) => {
        
        db.Password.findOne({ where: { id: req.params.id } }).then(function (dbPassword) {
            // console.log(dbPassword);
            db.Password.findOne({where: {
                id: req.params.id
            }}).then(function(dbPassword) {
                res.render("update-password", dbPassword)
            })
           
        });
    })

};