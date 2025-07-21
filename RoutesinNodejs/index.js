
const express = require('express');       // Importing the Express framework , // Express simplifies the process of creating a server and handling requests.
const app = express();                      // Creating an instance of an Express application
const stuRoutes = require('./routes/stuRoutes'); // Importing the student routes
const teacherRoutes = require('./routes/teacherRoute'); // Importing the teacher routes

app.use('/students', stuRoutes); // Using the student routes under the '/students' path
app.use('/teachers', teacherRoutes); // Using the teacher routes under the '/teachers' path

app.listen(9000, () => {                  // Starting the server on port 9000
  console.log('Server is running on port 9000');
});
   


   










