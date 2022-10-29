const htmlRouter = require("express").Router();
const path = require("path");

// GET Route for homepage
htmlRouter.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);


module.exports = htmlRouter;