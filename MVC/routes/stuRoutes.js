const express = require('express');
const route = express.Router(); // Creating a new router instance
const stucontroller  = require("../controller/stucontroller");

route.get("/", stucontroller.homePage);
route.get("/about", stucontroller.aboutPage);
route.get("/product", stucontroller.productPage);
route.get("/service", stucontroller.servicePage);
route.get("/contact", stucontroller.contactPage); 


module.exports = route;

