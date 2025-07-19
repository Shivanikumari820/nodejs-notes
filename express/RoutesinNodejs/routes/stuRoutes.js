const express = require('express'); // Importing the Express framework
const router = express.Router();       // Creating a new router instance

router.get('/home', (req, res) => {
  res.send('<h1>Welcome to my Home Page!</h1>'); // Handling GET requests to the home page
});

router.get('/subject', (req, res) => {
  res.send('<h1>Welcome to my Subject Page!</h1>'); // Handling GET requests to the subject page
});

router.get('/Fees', (req, res) => {
  res.send('<h1>Welcome to my Fees Page!</h1>'); // Handling GET requests to the fees page
});

router.get('/result', (req, res) => {
  res.send('<h1>Welcome to my Result Page!</h1>'); // Handling GET requests to the result page
});


module.exports = router; // Exporting the router for use in other files





