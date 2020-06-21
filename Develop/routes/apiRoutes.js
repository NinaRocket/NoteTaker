//linking routes to data sources
const express = require('express');
//const path = require("path");
const noteData = require("../db/db.json");
//const 

const fs = require('fs');
let id = noteData.length + 1;

module.exports = function (app) {

    //API GET requests
    //handles user visiting a page

    app.get("/api/notes", function (req, res) {

        res.json(noteData);
    });

    //API POST requests
    // POST request
    //handles when user submits their notes (a JSON object), pushed to array
    //data is sent to server, saved in the array

    app.post("/api/notes", function (req, res) {

        const data = req.body;
        //adding ID to note
        data.id = id++;
        while (noteData.includes(id)) {
            id++;
        };

        //read file
        //let rawdata = fs.readFileSync("db/db.json", "utf8");
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

        const noteID = parseInt(req.params.id);
        //noteData.filter(noteID);
        //target id in array and then delete, filter
        // const data = req.body;

        // while (noteData.includes(id)) {
        //     noteData.splice(noteData.id);
        // };
        const arrayID = noteData.filter((notes, index) => {
            console.log(notes.id);
            return noteID !== notes.id;
        });
        fs.writeFile("db/db.json", JSON.stringify(arrayID), (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
            }
        });
        console.log(noteData);
        res.json(noteData);

        console.log(arrayID);

        // //let arrayID = noteData.filter(id);
        // noteData.splice(arrayID);
        // while (noteData.indexOf(id) !== -1) {
        //     noteData.splice(noteData.indexOf(id), 1);
        // }

        //res.json({ ok: true });
    });
};