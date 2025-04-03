const http = require('http'); // Importing the http module
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world'); // Sending a response
        res.end(); // Ending the response
    } else if (req.url === '/about') {
        res.write('this is about'); // Sending a response
        res.end(); // Ending the response
    } else{
        res.write('404 not found'); // Sending a response
        res.end(); // Ending the response
    }
}); // Creating a server using the http module

server.listen(3000); // Listen on port 3000

//no need to use this function
server.on('connection', (socket) => {
    console.log("New Connection"); // Log when a new connection is made
}); // Listen on socket connection event

console.log("Server is running on port 3000"); 