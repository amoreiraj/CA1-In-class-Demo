const express = require("express");//Create the app with express
const bodyParser = require("body-parser");
const cors = require("cors");
mongoose = require('mongoose');
require('dotenv').config();

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
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

db.mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
})
db.mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});


//simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome here." });
});

require("./app/routes/coquitalbar.routes")(app);
