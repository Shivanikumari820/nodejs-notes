
const express = require("express");
const route = express.Router();
const stuController = require("../controllers/stuController");

route.get("/", stuController.homePage);
route.get("/home", stuController.homePage);
route.get("/insert", stuController.insertPage);
route.get("/display", stuController.displayPage);
route.get("/update", stuController.updatePage);
route.get("/datadelete", stuController.dataDelete);
route.get("/editdata", stuController.editPage);
route.post("/editsave", stuController.editSave);


route.post('/save',stuController.stuSave)

module.exports = route;

