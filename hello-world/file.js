const fs = require("fs");

// fs.writeFileSync("./file.txt", "Hello, world!");
// const result = fs.readFileSync("./conatct.txt", "utf8");
// fs.readFile("./conatct.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });
// console.log(result);
fs.appendFileSync("./file.txt",new Date().toString());