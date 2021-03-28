function makeMultipleLister(number) {
  let interval = number;

  return function() {
    while (interval < 100) {
      console.log(interval);
      interval += number;
    }
  };
}

let lister = makeMultipleLister(17);
lister();
