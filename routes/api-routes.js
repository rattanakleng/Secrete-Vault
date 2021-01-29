// Dependencies
// Requiring todo model
const db = require("../models");

// Routes
module.exports = function(app) {
app.get("/api/passwords/", function(req, res) {
    // GET route for getting all of passwords
    db.Passwords.findAll({})
    .then(function(dbPasswords) {
        res.json(dbPasswords);
    })
})

}
    
   