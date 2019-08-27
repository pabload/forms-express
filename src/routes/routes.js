const express = require("express");
const route = express.Router();
const bodyParser = require('body-parser');
route.use(bodyParser.urlencoded({ extended: true }));
route.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });
route.get("/",function (req, res){
    res.render("form");
});
route.get("/form.ejs",function (req, res){
    res.render("form");
});
route.post("/res.ejs",function (req, res){
    res.render("res",{ nombre: req.body.nombre, apellidos: req.body.apellidos, genero: req.body.genero});
    console.log(req.body.genero);
});
route.get("/res.ejs",function (req, res){
   res.redirect("/");
});

module.exports = route;