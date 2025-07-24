const stuModel = require('../models/stuModel'); // Importing student model
// const empModel = require('../models/empModel'); // Importing employee model


const homePage = (req,res)=>{
    // res.send("</h1>Welcome to my Home Page!</h1>");
    res.render("home"); // Render the home view using EJS
} 
const aboutPage = (req,res)=>{
    // res.send("</h1>Welcome to my About Page!</h1>");
    res.render("about");
}

const productPage = (req,res)=>{
    // res.send("</h1>Welcome to my Subject Page!</h1>");
    res.render("product");

}

const servicePage = (req,res)=>{
    res.render("service");
}

const contactPage = (req,res)=>{
    res.render("contact");
}




module.exports = {
    homePage, aboutPage, productPage, servicePage, contactPage
};
