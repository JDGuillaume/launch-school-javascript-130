function makeCounterLogger(integer) {
  return function(secondInteger) {
    let start = integer;

    if (integer > secondInteger) {
      while (start >= secondInteger) {
        console.log(start);
        start--;
      }
    } else {
      while (secondInteger >= start) {
        console.log(start);
        start++;
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2
