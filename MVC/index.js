const express = require('express');       // Importing Express
const app = express();                    // Creating app

const stuRoutes = require('./routes/stuRoutes');  // ✅ Fixed path here

app.use('/students', stuRoutes);          // Using router

app.listen(9000, () => {
  console.log('Server is running on port 9000');
});
