const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/simple-mern');

module.exports = mongoose;
