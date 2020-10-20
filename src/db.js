const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/simple-mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;
