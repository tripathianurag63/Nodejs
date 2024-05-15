//const http = require("http");
// na hi iski zarurat padegi
const express = require("express");

const app = express(); 

app.get("/", (req,res) => {
    return res.send("Hello From Home Page");
});

app.get("/about", (req,res) => {
    return res.send(`hello ${req.query.name}`);
});

app.listen(8000, () => console.log("Server started!"));

//const myServer = http.createServer(app);

//myServer.listen(8000, ()=>console.log("Server Started!"));

// ab inki bhi jarurat nhi kyuki express use kar rhe h