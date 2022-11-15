const fs = require("fs");
const http = require("http");

fs.writeFile(
  "index.html",
  `<h1> Hello World </h1>
  <p> This is Sarhanhusen A Malek... </p>
  `,
  (err) => console.log(err)
);

const server = http.createServer((req, res) => {
  res.writeHead(200,{"Content-type" : "text/html"});
  fs.readFile("index.html",{encoding:"utf-8"},(err,data)=>{
    res.end(data);
  })
});

server.listen(5000, () => console.log("Server is up at 5000"));