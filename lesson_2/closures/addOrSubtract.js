let runningTotal = 0;

function add(integer) {
  runningTotal += integer;
  return runningTotal;
}

function subtract(integer) {
  runningTotal -= integer;
  return runningTotal;
}

console.log(add(1)); // 1
console.log(add(42)); // 43
console.log(subtract(39)); // 4
console.log(add(6)); // 10
