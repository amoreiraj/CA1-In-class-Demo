const express = require("express");//Create the app with express
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const path = require('path');
mongoose = require('mongoose');
require('dotenv').config();
const app = express();
let server = http.createServer(app);

let corsOptions = {
    origin: "http://localhost:8000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//conecting to mongoose
const db = require("./app/models");
db.mongoose
.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

.then('connected', () => { 
    console.log('MongoDB is successfully connected');
})

.catch('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});


//simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome here." });
});

// require("./app/routes/coquital.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});