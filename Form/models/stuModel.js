const mongoose = require('mongoose');  // Importing Mongoose

const studentSchema = new mongoose.Schema({
    rollno: {
        type: Number,
        required: true
    },
    classname: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student', studentSchema);  // Exporting model
