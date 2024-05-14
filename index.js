const http = require("http");
//ye ek call back fn return karta h jisme request aur response hota h
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("Homepage");
                break;
            case "/about":
                res.end("I am Anurag");
                break;
            default:
                res.end("404 Not Found");
        }
    });

});
// port is like doors of the home tum jis door pe chahe serevr ko run kara skte ho
myServer.listen(8000, ()=>console.log("Server Started!"));