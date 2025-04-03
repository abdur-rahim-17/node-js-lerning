const fs=require('fs'); // Importing the fs module

//Sync version of writing file
fs.writeFileSync('test.txt','Hello World!');
//Sync version of appending file
fs.appendFileSync('test.txt','Hello Programmers!');
//Sync version of reading file
const data=fs.readFileSync('test.txt');
 //Printing content of file
console.log(data);
//Printing content of file in string format
console.log(data.toString());

// Async version of reading file
fs.readFile('test.txt', (err, data) => {
    console.log(data.toString());
});
console.log("Hello Programmers!");