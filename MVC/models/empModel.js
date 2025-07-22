const mongoose = require('mongoose');  // Importing Mongoose

const employeeSchema = new mongoose.Schema({
    empId : Number, 
    empName : String,
    empAge : Number,
    empSalary : Number
});

module.exports = mongoose.model('Employee', employeeSchema);  // Creating model
