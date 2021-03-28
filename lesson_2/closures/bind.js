'use strict';
function bind(object, func) {
  return function() {
    return func.call(object);
  };
}

let obj = {};

let boundFunc = bind(obj, function() {
  this.foo = 'bar';
});

boundFunc();
console.log(obj); // { foo: 'bar' }
