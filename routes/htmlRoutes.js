const htmlRouter = require("express").Router();
const path = require("path");

// GET Route for /notes
htmlRouter.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for *
htmlRouter.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = htmlRouter;