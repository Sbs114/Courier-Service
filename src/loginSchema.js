const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017", {useUnifiedTopology:true,
useNewUrlParser: true});

const User = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    dob: String,
    gender: String
});

const user = mongoose.model("user", User);

module.exports = user;