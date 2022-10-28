const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));