const router = require("express").Router();
const path = require("path");

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/assets/index.html'))
);