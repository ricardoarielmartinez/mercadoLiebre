const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT||3001,()=>{
    console.log("Servidor iniciado");
})


app.get("/",(req,res)=>{
    res.sendFile (path.resolve("./views/home.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile (path.resolve("./views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile (path.resolve("./views/login.html"))
})