const apiRouter = require("express").Router();
const fs = require("fs");
const notes = require("../db/db.json");

// GET Route for retrieving all the notes
apiRouter.get('/notes', (req, res) => {
    res.json(`${req.method} request received for note`);
  });

// POST Route for retrieving all the notes
apiRouter.post('/notes', (req, res) => {
    console.info(`${req.method} request received for note`);
    // destructure
    const { title, text } = req.body;
    // check if note has title and text
    if (title && text) {
        // save note in obj
        const newNote = {
            title,
            text
        };
        // add new review
        notes.push(newNote);
        // restringify
        const reviewNote = JSON.stringify(notes);
        // write
        fs.writeFile("../db/db.json", reviewNote, (err) =>
        err
          ? console.error(err)
          : console.log(`New note has been written to JSON file`)
        );
        res.status(201).json;
    } else {
        res.status(500).json("Error in adding note")
    }
});
