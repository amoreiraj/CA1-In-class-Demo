//var logger = require("morgan"),
//http = require("http"),
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// mongoose = require('mongoose');
//require('dotenv').config();

//server.js
const app = express();
//app.use(server.js);

var corsOptions = {
    origin: "http://localhost:3000"
};

//var port = process.env.PORT || 3000;
//var userCtrl = require('./user-controller');

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(require('./routes'));

// app.post('/users', userCtrl.createUser);
// app.get('/users', userCtrl.getUsers);
// app.get('/users/:id', userCtrl.getUser);
// app.delete('/users/:id', userCtrl.deleteUser);
// app.put('/users/:id', userCtrl.updateUser);


//conecting mongoose
const db = require("./app/models");
db.mongoose
.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

db.mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
db.mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});

//simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome here." });
});

require("./app/routes/coquitalbar.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});