const EventEmitter = require('events'); // Importing the events module
const emitter = new EventEmitter(); // Creating an instance of EventEmitter
const MyEmitter=require('./event2'); // Importing the MyEmitter class from event2.js

// Defining the listener function for the bellEvent
emitter.on('bellEvent', () => {
    console.log("Bell Event has been emitted!");
});

//raise the event
emitter.emit('bellEvent'); // Emitting the bellEvent

setTimeout(() => {
    console.log("After 3 seconds, the bellEvent has been emitted again!");
    emitter.emit('bellEvent'); // Emitting the bellEvent again
}, 3000);

// Defining the listener function for the paramEvent event with the parameter
emitter.on('paramEvent', (parameter) => {
    console.log("Bell Event has been emitted with parameter: " + parameter);
});

emitter.emit('paramEvent', 'Hello World!'); // Emitting the paramEvent with a parameter

emitter.on('multiParamEvent', ({param1,param2})=>{
    console.log(`multipleParameter event ${param1} with parameter ${param2}`);
}); // Defining the listener function for the multiParamEvent event with multiple parameters

setTimeout(()=>{
console.log("After 2 seconds, the multiParamEvent has been emitted again!");
emitter.emit('multiParamEvent', {
    param1: 'Hello World!',
    param2: 'Hello Programmers!'
}); // Emitting the multiParamEvent with multiple parameters
},2000);

const myEmitter=new MyEmitter(); // Creating an instance of MyEmitter
myEmitter.on('eventCall', (message) => {
    console.log(message); // Printing the message received from the eventCall event
});

myEmitter.eventCall(); // Calling the eventCall method to emit the event