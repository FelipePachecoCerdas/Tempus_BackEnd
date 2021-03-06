const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const auth = require('express-basic-auth')
const app = express();

var corsOptions = {
  origin: "http://localhost:8100"
};

var basicAuth = require('express-basic-auth');

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


/*app.use(basicAuth({
    challenge: true,
    users: {'tencio':'tempus1012', 'felipe': 'tempus1012' }
}));*/

const db = require("./app/models");

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Testing Postgre API." });
});



require("./app/routes/controllers.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

