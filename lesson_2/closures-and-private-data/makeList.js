/* eslint-disable max-lines-per-function */
function makeList() {
  const todoList = [];

  return function(argument) {
    if (argument === undefined) {
      if (todoList.length === 0) {
        return 'The list is empty';
      }

      return todoList.join('\n');
    }

    if (!todoList.includes(argument)) {
      todoList.push(argument);
      console.log(`${argument} added!`);
    } else {
      let index = todoList.find(todo => todo === argument);
      if (index) todoList.splice(index, 1);
      console.log(`${argument} removed!`);
    }
  };
}

let list = makeList();
console.log(list());
// The list is empty.

list('make breakfast');
// make breakfast added!

list('read book');
// read book added!

console.log(list());
// make breakfast
// read book

list('make breakfast');
// make breakfast removed!

console.log(list());
// read book
