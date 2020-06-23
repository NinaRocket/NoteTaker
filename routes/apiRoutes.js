//linking routes to data sources
const express = require('express');
//const path = require("path");
let noteData = require("../db/db.json");
//uuid to assign unique id's to notes
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

module.exports = function (app) {

    //API GET requests
    app.get("/api/notes", function (req, res) {

        res.json(noteData);
    });

    //API POST request
    app.post("/api/notes", function (req, res) {
        //req.body is the note data
        const data = req.body;
        //adding ID to note
        data.id = uuidv4(data.id);

        noteData.push(data);
        fs.writeFile("db/db.json", JSON.stringify(noteData), (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
            }
        });
        res.json(true);
    });

    app.delete("/api/notes/:id", function (req, res) {

        //targets the id in the note
        const noteID = req.params.id;

        //target id in array and then delete with filter method
        noteData = noteData.filter((notes, index) => {
            console.log(index)
            return noteID !== notes.id;
        });
        fs.writeFile("db/db.json", JSON.stringify(noteData), (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
            }
        });

        res.json(true);

    });
};
