//console.log("Apple");
//setTimeout(() => {
  //console.log("banana");
//}, 1000);
//console.log("grapes");

const fs = require('fs');
//fs.readFile("text/dummy.txt","utf-8",(err,data)=>{
//  if(err) {
  //  return false;
  //}
//  console.log(data);
//});
//console.log("end script");
const data = fs.readFileSync("text/dummy.txt","utf-8");
console.log(data);