function foo(start) {
  let prod = start; // prod = 2
  return function(factor) {
    prod *= factor; // prod is 2, prod = prod * factor
    return prod; // return prod;
  };
}

let bar = foo(2); // function where prod is now 2
let result = bar(3); // prod = 2 * 3 = 6, result = 6;
result += bar(4); // prod = 6 * 4 = 24, result = 30;
result += bar(5); // prod = 24 * 5 = 120, result = 150;
console.log(result); // 150;
