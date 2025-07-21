const express = require('express'); // Importing the Express framework
const router = express.Router();       // Creating a new router instance

router.get('/teacherinfo', (req, res) => {
  res.send('<h1>Welcome to my Teacher Info Page!</h1>'); // Handling GET requests to the teacher info page
});

router.get('/address', (req, res) => {
  res.send('<h1>Welcome to my Address Page!</h1>'); // Handling GET requests to the address page
});

router.get('/salary', (req, res) => {
  res.send('<h1>Welcome to my Salary Page!</h1>'); // Handling GET requests to the salary page
});

router.get('/department', (req, res) => {
  res.send('<h1>Welcome to my Department Page!</h1>'); // Handling GET requests to the department page
});

router.get('/work', (req, res) => {
  res.send('<h1>Welcome to my Work Page!</h1>'); // Handling GET requests to the work page
});


module.exports = router; // Exporting the router for use in other files