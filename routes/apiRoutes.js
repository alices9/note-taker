const apiRouter = require("express").Router();
const fs = require("fs");
const notes = require("../db/db.json"); // referenced from this file location

// GET Route for retrieving all the notes
apiRouter.get('/notes', (req, res) => {
    console.log(`${req.method} request received for note`);
    res.json(notes);
  });

// POST Route for adding notes
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

        // add new note
        notes.push(newNote);

        // restringify
        const reviewNote = JSON.stringify(notes);
        // write to file, referenced from the root
        fs.writeFile("./db/db.json", reviewNote, (err) =>{
            if (err) {
                console.error(err);
                res.status(500).end();
              }
        });
        res.json(notes);
    } else {
        res.status(500).json("Error in adding note")
    }
});

module.exports = apiRouter;