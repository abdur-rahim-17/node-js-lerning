const path = require('path'); // Importing the path module
const myPath = 'D:/Learning/node-js-lerning\index.js'; // path module is used to work with file and directory paths
console.log(path.parse(myPath)); // prints the path object with root, dir, base, ext and name properties
console.log(path.basename(myPath)); // prints the last portion of a path
console.log(path.extname(myPath)); // prints the extension of the path