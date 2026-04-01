const fs = require('fs');

const operation = process.argv[2];
if(operation=="write"){
  const name = process.argv[3];
  const content = process.argv[4];
  const fullname = "files/" + name + ".txt";
  
  fs.writeFileSync(fullname, content);

}else if(operation=="update"){
  const name = process.argv[3];
  const content = process.argv[4];
  const fullname = "files/" + name + ".txt";

   let data = fs.appendFileSync(fullname, content);
   console.log(data);
}


/*const fs = require('fs');
//create file
fs.writeFileSync("files/banana.txt","this is a fruit");

// delete file 
fs.unlinkSync("files/banana.txt");


//reading file content
//const data = fs.readFileSync("files/apple.txt","utf-8");
//console.log(data);

//append file content
fs.appendFileSync("files/apple.txt","this is an updated fruit");*/