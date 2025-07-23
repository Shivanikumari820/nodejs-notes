const express = require('express');       // Importing Express
const app = express();                    // Creating app
// const mongoose = require('mongoose');          // Importing Mongoose
const stuRoutes = require('./routes/stuRoutes'); 

app.set('view engine', 'ejs');          // Setting EJS as the view engine

// mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch(err => console.log(err));
// mongoose.connect("mongodb://127.0.0.1:27017/employeeDB")
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch(err => console.log(err));

// app.use('/students', stuRoutes);          // Using router
app.use('/', stuRoutes);        // Using router for root path


app.listen(9000, () => {
  console.log('Server is running on port 9000');
});
