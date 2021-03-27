function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }

  while (index < array.length) {
    accumulator = callback(accumulator, array[index]);
    index += 1;
  }

  return accumulator;
}

function filter(array, callback) {
  return array.reduce((filteredItems, value) => {
    if (callback(value)) {
      filteredItems.push(value);
    }

    return filteredItems;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true)); // => [ 1, 2, 3, 4, 5 ]

let values = [1, 'abc', null, true, undefined, 'xyz'];
console.log(filter(values, value => typeof value === 'string'));
