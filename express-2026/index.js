const express = require('express');
const  app = express();
app.get("/",(req,resp)=>{
    resp.send("<h1>Hello!</h1><p>this is home page!</p>")
});




app.get("/about",(req,resp)=>{
    resp.send("<h1>Hello!</h1><p>this is about page!</p>")
});
app.get("/contact",(req,resp)=>{
    resp.send("<h1>Hello!</h1><p>this is contact page!</p>")
});

app.listen(6600)