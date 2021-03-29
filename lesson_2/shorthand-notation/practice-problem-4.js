function foo(array) {
  const newArray = [];
  newArray.push(array[2]);
  newArray.push(5);
  newArray.push(array[0]);
  return newArray;
}

let array = [1, 2, 3];
let result = foo(array);

let bar = result[0];
let qux = result[1];
let baz = result[2];
