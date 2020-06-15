//linking routes to data sources

const noteData = require("../data/noteData");


//ROUTING

module.exports = function (app) {

    //API GET requests
    //handles user visiting a page

    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    //API POST requests
    //handles when user submits their notes (a JSON object), pushed to array
    //data is sent to server, saved in the array

    app.post("/api/notes", function (req, res) {
        noteData.push(req.body);
        res.json(true);
    });


};