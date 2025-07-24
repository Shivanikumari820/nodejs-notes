const express = require('express');
const route = express.Router(); // Creating a new router instance
const stucontroller  = require("../controller/stucontroller");

route.get("/", stucontroller.homePage);
route.get("/insert", stucontroller.insertPage);


route.post("/save", stucontroller.stuSave);
module.exports = route;

