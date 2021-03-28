function later(callback, argument) {
  return function() {
    return callback(argument);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, 'The system is shutting down!');
logWarning(); // The system is shutting down!
