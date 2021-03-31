/* eslint-disable max-lines-per-function */
const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray returns an array of the current todo objects', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first returns the first todo object', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('last returns the last todo object', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('shift removes and returns the first todo object in the list', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('pop removes and returns the last todo object in the list', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone returns true if all todos are done, otherwise it returns false', () => {
    expect(list.isDone()).toBe(false);
  });

  test('add raises TypeError if argument is not an instance of Todo', () => {
    expect(() => list.add(2)).toThrowError(TypeError);
    expect(() => list.add('what')).toThrowError(TypeError);
    expect(() => list.add(new TodoList('Check'))).toThrowError(TypeError);
  });

  test('itemAt returns item at a given index or raises a ReferenceError', () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(list.itemAt(1)).toBe(todo2);
    expect(() => list.itemAt(4)).toThrowError(ReferenceError);
  });

  test('markDoneAt toggles the done property to true for a given todo', () => {
    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);

    expect(() => list.markDoneAt(5)).toThrowError(ReferenceError);
  });

  test('markUndoneAt toggles the done property to false for a given todo', () => {
    list.markDoneAt(0);
    list.markDoneAt(1);
    list.markDoneAt(2);

    list.markUndoneAt(1);

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(true);

    expect(() => list.markDoneAt(5)).toThrowError(ReferenceError);
  });

  test('markAllDone should toggle the done property to true for all todo items', () => {
    list.markAllDone();

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);

    expect(list.isDone()).toBe(true);
  });

  test('removeAt removes the todo at a given index or returns a ReferenceError', () => {
    list.removeAt(2);

    expect(list.toArray()).toEqual([todo1, todo2]);
    expect(() => list.removeAt(2).toThrowError(ReferenceError));
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns correct string when a todo has been completed', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    list.markDoneAt(0);
    expect(list.toString()).toBe(string);
  });

  test('toString returns correct string when all todos have been completed', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test('forEach iterates over all elements in a given list', () => {
    let newArray = [];
    list.forEach(todo => newArray.push(todo));

    expect(list.toArray()).toEqual(newArray);
  });

  test('filter should return a new TodoList object with selected cases', () => {
    todo1.markDone();
    todo2.markDone();

    const filteredList = list.filter(todo => todo.isDone());
    expect(filteredList.toArray()).toEqual([todo1, todo2]);
    expect(filteredList).not.toBe(list);
  });
});
