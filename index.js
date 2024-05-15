const http = require("http");
const fs = require("fs");
const url = require("url");

//ye ek call back fn return karta h jisme request aur response hota h
const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end(); 
    const log = `${Date.now()}: ${req.url} New Req Received\n`
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                if(req.method === "GET") res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end("here are your results for " + search);
            case "/signup":
                //get mtlb ye ek sign up form h hme data dena hoga
                if(req.method === "GET") res.end("This is a signup from");
                else if (req.method === "POST") {
                    // agar post h mtlb database se data le kar ayega server
                    // DB query
                    res.end("Success");
                }
            default:
                res.end("404 Not Found");
        }
    });

});
// port is like doors of the home tum jis door pe chahe serevr ko run kara skte ho
myServer.listen(8000, ()=>console.log("Server Started!"));