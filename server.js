const http = require('http');
http.createServer((req,resp)=>{
  resp.write("<h1> hello this is sweety</h1>");

  resp.end("hello!");

}).listen(4800);