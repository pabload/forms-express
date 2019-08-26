const express = require("express");
const route = express.Router();
const bodyParser = require('body-parser');
route.use(bodyParser.urlencoded({ extended: true }));
route.get("/",function (req, res){
    res.render("form");
});
route.get("/res.ejs",function (req, res){
    console.log(req.body);
    res.render("res");
});

module.exports = route;