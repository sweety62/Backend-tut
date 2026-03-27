 const http = require('http');
 const fs = require('fs');
 const querystring = require('querystring');
  http.createServer((req,resp)=>{
 fs.readFile('html/form.html','utf-8',(error,data)=>{
  
  if(error) {
    resp.writeHead(500,{"Content-type":'text/plain'})
    
    resp.end("internal server error")
    return;
  }
  resp.writeHead(200,{"Content-type":'text/html'})


  if(req.url=='/'){
  resp.write(data);
    

  }else if(req.url=='/Submit'){
    let dataBody = [];
    req.on("data",(chunk)=>{
      dataBody.push(chunk);

    });
    req.on('end',()=>{
      let rawData = Buffer.concat(dataBody).toString();
      let readableData = querystring.parse(rawData);
      let dataString = "my name is"+readableData.name+"and my email  id is"+readableData.email;
      console.log( readableData);
      //fs.writeFileSync("./text"+readableData.name+".txt",dataString);
      //console.log("file created");
      fs.writeFile("./text"+readableData.name+".txt",dataString,'utf-8',(err)=>{
        if(err){
          resp.end("internal server error");
          return false;
        }
        else{
          console.log("file created");
        }
      });

    })
    resp.write("<h1>Data Submitted</h1>")
  }


  resp.end("");
   })

 }).listen(6500)



/* http.createServer((req,resp)=>{
  resp.writeHead(200,{"Content-type":'text/html'})
  console.log(req.url);
  if(req.url=='/'){
  resp.write(`
    <form action= "/Submit" method="post">
    <input type ="text" placeholder="enter name" name="name"/>
    <input type ="text" placeholder="enter email" name="email"/>
    <button>Submit</button>
    </form>
    
    `);

  }else if(req.url=='/Submit'){
    resp.write("<h1>Data Submitted</h1>")
  }
     resp.end();

 }).listen(4500)*/
 