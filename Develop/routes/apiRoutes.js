//linking routes to data sources
const express = require('express');
//const path = require("path");
const noteData = require("../data/noteData");


const fs = require('fs');
//ROUTING

//const router = express.Router();

module.exports = function (app) {

    //API GET requests
    //handles user visiting a page

    app.get("/api/notes", function (req, res) {
        res.json(noteData);
        let rawdata = fs.readFileSync("db/db.json");
        console.log(rawdata);
    });



    //API POST requests
    // POST request
    //handles when user submits their notes (a JSON object), pushed to array
    //data is sent to server, saved in the array

    app.post("/api/notes", function (req, res) {

        noteData.push(req.body);
        res.json(true);
    });

    app.delete("/api/notes/:id", function (req, res) {

    });
};