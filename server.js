const http = require('http');
http.createServer((req,resp)=>{
  resp.write("<h1> hello this is sweety pursuing B.tech from cse department</h1>");

  resp.end("hello! how are You!");

}).listen(4800);



http.createServer((req,resp)=>{
  resp.write("<h2> Other servers</h2>");

  resp.end("hello!");

}).listen(5800);