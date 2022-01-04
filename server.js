// ! javascript is synchronic language
// ! node.js is asynchronic language
// const os = require("os");
// console.log(os.version());
// console.log(os.totalmem() / 1024);

const http = require("http");
const fs = require("fs");

// ! fs metodlari!
/*
fs.appendFile("./data/data.js") ----> oldindan yaratilgan data folderiga data.js file ni yaratib ichiga content joylab beradi. har yangi ma`lumot jo`natganimizada data.js da mavjud contentni o`chirmay davomidan qo`shib qo`yadi!
*/

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    if (req.url.substring(1) == "newUser") {
      req.on("data", (data) => {
        let user = JSON.parse(data);

        // fs.readFile("./data/data.js", (err, data) => {
        //   const arr = jSON.parse(data);
        //   arr.push(user);
        // });
        fs.appendFile("./data/data.js", JSON.stringify(user), (err) => {
          if (err) throw err; //note: "Throw" runtime paytda xatolik bo`sa chiqarib beradi
          console.log("created");
        });
      });
      res.end("data keldi");
    }
  }
});

server.listen(9000, console.log(9000));
