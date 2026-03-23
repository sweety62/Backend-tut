const http = require('http');

const usersData = [
  {
  name:"sweety",
  age:20,
  email:"sweety@test.com"
  },
  {
  name:"Raja",
  age:30,
  email:"raja@test.com"
  },
  {
  name:"sweta",
  age:40,
  email:"sweta@test.com"
  },
  
]

http.createServer((req,resp)=>{
  resp.setHeader("Content-type",'application/json');

  resp.write(JSON.stringify(usersData));
  resp.end();



}).listen(6100);