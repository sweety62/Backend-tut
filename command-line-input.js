const arg = process.argv;
const port = (arg[2]);
const http = require('http');
http.createServer((req,resp)=>{
  resp.write('testing input from cmd')
  resp.end()

}).listen(port)