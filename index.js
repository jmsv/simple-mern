const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require("./src/config");
const passport =require("passport");

const url = config.mongoUrl;
const connect = mongoose.connect(url);   

connect.then((db) =>{
    console.log("Connected to MongoDB database");
})

const app = express();

app.use(passport.initialize());  //New

const routeTasks = require('./src/routes/tasks');
const routeUsers = require('./src/routes/users');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());

app.use('/api/tasks', routeTasks, (req, res) => res.sendStatus(401));
app.use('/api/users', routeUsers);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);