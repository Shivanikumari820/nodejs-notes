const mongoose = require('mongoose');  // Importing Mongoose

const stuSchema = new mongoose.Schema({
    rollno : Number, 
    name : String,
    age : Number,
    city : String,
    fees : Number
});

module.exports = mongoose.model('Student', stuSchema);  // Creating model
