const http = require("http");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, from homw page!");
});

app.get("/about", (req, res) => {
  res.send("Hello, from about page!" + req.query.myName);
});

// function myhandler(req, res) {
//   const log = `${Date.now()}:${req.url}New request received\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);

//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (req.url) {
//       case "/":
//         res.end("Hello, world!");
//         break;
//       case "/about":
//         res.end("About us");
//         break;
//       default:
//         res.end("404 Not Found");
//     }
//   });
// }
app.listen(3000, () => console.log("server is running..."));
// const server = http.createServer(app);

// server.listen(3000, () => console.log("server is running..."));
