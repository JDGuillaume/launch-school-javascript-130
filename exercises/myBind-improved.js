function myBind(callback, context) {
  let beginningArguments = [...arguments].slice(2);

  return function() {
    let remainingArguments = [...arguments];
    let allArguments = beginningArguments.concat(remainingArguments);

    return callback.apply(context, allArguments);
  };
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
