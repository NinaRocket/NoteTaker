//linking routes to data sources
const express = require('express');
//const path = require("path");
let noteData = require("../db/db.json");
//const 
const { v4: uuidv4 } = require('uuid');
//let id = uuidv4(noteData);


const fs = require('fs');
//let id = noteData.length + 1;
let id = uuidv4(noteData.length, 0);
//let id = uuidv4();

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
        //req.body is the note data
        const data = req.body;
        //adding ID to note
        data.id = uuidv4(data.id);
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

        //const noteID = parseInt(req.params.id);
        const noteID = req.params.id;
        console.log(noteID);

        //target id in array and then delete, filter

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

        console.log(noteData);

        res.json(true);

    });
};
// const arrayID = noteData.filter((notes, index) => {

//     return noteID !== notes.id;

// });

 // for (let i = 0; i < noteData.length; i++) {
        //     if (noteID === noteData[i].id) {
        //         noteData.splice(i, 1);
        //         //res.json(true);
        //     }
        // }