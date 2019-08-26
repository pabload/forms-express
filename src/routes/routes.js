const express = require("express");
const route = express.Router();
const bodyParser = require('body-parser');
route.use(bodyParser.urlencoded({ extended: true }));
route.get("/",function (req, res){
    res.render("form");
});
route.post("/res.ejs",function (req, res){
    console.log(req.body.fruta);
    res.render("res",{ nombre: req.body.nombre, apellidos: req.body.apellidos, genero: req.body.genero});
});

module.exports = route;