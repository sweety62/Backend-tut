//path module

const path = require('path');
const file = "text/peter.txt"
//for finding the file extension
console.log(path.extname(file)) // .txt

//for finding the directory name
console.log(path.dirname(file)) // text

//for finding the base name
console.log(path.basename(file)) // peter.txt

//for finding the absolute path
console.log(path.resolve("text","peter.txt"));

//global constants
console.log(__dirname);
console.log(__filename);