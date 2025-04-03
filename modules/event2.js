const EventEmitter = require('events'); // Importing the events module

class MyEmitter extends EventEmitter {
    eventCall() {
        console.log("Event has been emitted!");
        this.emit('eventCall', 'event from another file'); // Emitting the eventCall event
    }
} // Creating a new class extending EventEmitter

module.exports = MyEmitter; // Exporting the MyEmitter class