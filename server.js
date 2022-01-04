// ! javascript is synchronic language
// ! node.js is asynchronic language
// const os = require("os");
// console.log(os.version());
// console.log(os.totalmem() / 1024);

// ! fs metodlari!
/*
! JSON.stringify 
---->Jsonni string qilib yozib qo`yadi aks holda shunchaki obyekt deb o`ylidi biz yozgan ma`lumotlarni!

!JSON.parse()
-------> Stringlani olib tashab yana JSON formatga ko`chirib beradi!

! "fs" (FILE SYSTEM)
--> "FS" bu file system ya`ni fayllar bilan ishlashga(yangi fayllar yaratishda, ularni saqlaashda) ishlatiladi! 

!fs.appendFile()
fs.appendFile("./data/data.js") ----> oldindan yaratilgan data folderiga data.js file ni yaratib ichiga content joylab beradi. har yangi ma`lumot jo`natganimizada data.js da mavjud contentni o`chirmay davomidan qo`shib qo`yadi!

!fs.writeFile()
fs.writeFile("./data/data.js")----> oldindan yaratilgan data folderiga data.js file ni yaratib ichiga content joylab beradi. har yangi ma`lumot jo`natganimizada data.js da mavjud contentni o`chirib yangi ma`lumotni qo`shib qo`yadi! Lekin fs.writeFile() dan oldin fs.readFile() qilib o`qilishi kerak bo`lgan fayl kontenti o`qib olsak keyin fs.writeFile() qiganimizda ham data.js da mavjud contentni o`chirmay davomidan qo`shib qo`yadi!
*/
                                           //! POST & PUT METHODS
const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    if (req.url.substring(1) == "newUser") {
      req.on("data", data => {
        let user = JSON.parse(data)

        fs.readFile("./data/data.js", (err, data) => {
          const arr = JSON.parse(data)
          arr.push(user)

          fs.writeFile("./data/data.js", JSON.stringify(arr), err => {
            if (err) throw err //note: "Throw" runtime paytda xatolik bo`sa chiqarib beradi
            console.log("created")
          })
        })
      })
      res.end("data keldi")
    }
  }
})

server.listen(9000, console.log(9000))
