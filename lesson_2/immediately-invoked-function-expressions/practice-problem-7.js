console.log(
  (function countdown(number) {
    if (number === 0) {
      return number;
    } else {
      console.log(number);
      return countdown(number - 1);
    }
  })(7)
);
