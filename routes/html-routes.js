//Dependency
const express = require("express");
// const router = express.Router();

module.exports = (app) => {

    //html router for index.handlebar
    app.get("/", (req, res) => {
        res.render("index");
    })

    //html router for view-password.handlebar
    app.get("/view-password", (req, res) => {
        res.render("view-password");
    })

    //html router for add-password.handlebar
    app.get("/add-password", (req, res) => {
        res.render("add-password");
    })

}


