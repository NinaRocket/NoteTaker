//linking routes to data sources
const express = require('express');
//const path = require("path");
const noteData = require("../db/db.json");
//const 

const fs = require('fs');
//ROUTING

//const router = express.Router();

module.exports = function (app) {

    //API GET requests
    //handles user visiting a page

    app.get("/api/notes", function (req, res) {

        let rawdata = fs.readFileSync("db/db.json", "utf8");
        res.json(rawdata);
    });

    //API POST requests
    // POST request
    //handles when user submits their notes (a JSON object), pushed to array
    //data is sent to server, saved in the array

    app.post("/api/notes", function (req, res) {

        //let rawdata = fs.readFileSync("db/db.json", "utf8");


        const data = req.body;
        //read file
        //let rawdata = fs.readFileSync("db/db.json", "utf8");
        noteData.push(data);
        fs.writeFile("db/db.json", JSON.stringify(rawdata), (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
                console.log("The written has the following contents:");
                console.log(fs.readFileSync("db/db.json", "utf8"));
            }
        });
        //adding ID to note

        data.id = 1;


        //noteData.push(data);

        res.json(true);
    });

    app.delete("/api/notes/:id", function (req, res) {

    });
};