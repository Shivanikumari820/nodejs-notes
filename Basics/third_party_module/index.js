const http = require('http');
const uc = require('uppercase');       // importing a third-party module

http.createServer((req, res) => {
  res.write("<h1>" + uc("Hello, World!") + "</h1>");   // using the third-party module to convert text to uppercase
  res.end();
}).listen(8000);
