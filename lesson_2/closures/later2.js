function later2(func, argument) {
  return function(when) {
    return func(argument, when);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, 'The system is shutting down');
shutdownWarning(30); // The system is shutting down in 30 minutes!
