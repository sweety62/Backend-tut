const http = require('http');

http.createServer((req,resp)=>{
  console.log(req.method);
  if(req. url == "/"){
  resp.write("<h1> Home page </h1>")
  }
  else if( req.url=="/Login"){
    resp.write("<h1> login page </h1>")
  }
  else{
    resp.write("Other page")
  }
  resp.end()
}).listen(6600)