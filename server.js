const express = require("express");
const path = require('path');
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));