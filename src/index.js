const express = require("express");
const path = require("path")
const app = express();
const bodyParser = require('body-parser')
const route = require("./routes/routes.js");
//configuraciones
app.set("port",4000);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
//archivos estaticos
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("./routes/routes.js"));

app.listen(3000,function(){ 
    console.log("server en puerto 3000");
    console.log(path.join(__dirname,"public"))
})