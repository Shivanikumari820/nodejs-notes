const express = require('express');
const route = express.Router(); // Creating a new router instance
const stucontroller  = require("../controller/stucontroller");

route.get("/home", stucontroller.homePage);
route.get("/about", stucontroller.aboutPage);
route.get("/subject", stucontroller.subjectPage);
route.get("/fees", stucontroller.feesPage);


module.exports = route;