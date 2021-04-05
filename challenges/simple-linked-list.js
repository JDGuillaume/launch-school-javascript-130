class Element {
  constructor(value, pointer = null) {
    this.value = value;
    this.pointer = pointer;
  }

  datum() {
    return this.value;
  }

  isTail() {
    return this.pointer === null;
  }

  next() {
    return this.pointer;
  }
}

class SimpleLinkedList {
  constructor() {
    this.first = null;
  }

  static fromArray(array) {
    if (array === null || array === undefined) array = [];
    let list = new SimpleLinkedList();

    [...array].reverse().forEach(element => list.push(element));

    return list;
  }

  head() {
    return this.first;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else return this.first.datum();
  }

  pop() {
    let oldHead = this.head();
    this.first = oldHead.next();
    return oldHead.datum();
  }

  push(data) {
    const element = new Element(data, this.head());
    this.first = element;
  }

  reverse() {
    const reversedList = new SimpleLinkedList();

    let current = this.head();

    while (current !== null) {
      reversedList.push(current.datum());
      current = current.next();
    }

    return reversedList;
  }

  size() {
    if (this.isEmpty()) return 0;

    let count = 1;
    let current = this.head();

    while (current.next() !== null) {
      current = current.next();
      count++;
    }

    return count;
  }

  toArray() {
    const array = [];

    let current = this.head();

    while (current !== null) {
      array.push(current.datum());
      current = current.next();
    }

    return array;
  }
}

module.exports = {Element, SimpleLinkedList};
