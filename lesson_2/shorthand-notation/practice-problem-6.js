function product() {
  const numbers = Array.from(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
