class CustomSet {
  constructor(array = []) {
    this.set = this.isUnique(array);
  }

  add(element) {
    if (!this.set.includes(element)) {
      this.set.push(element);
    }

    return this;
  }

  contains(number) {
    if (number === undefined || this.isEmpty()) return false;
    return this.set.includes(number);
  }

  difference(otherSet) {
    return new CustomSet(
      this.set.filter(element => !otherSet.set.includes(element))
    );
  }

  intersection(otherSet) {
    return new CustomSet(
      this.set.filter(element => otherSet.set.includes(element))
    );
  }

  isDisjoint(otherSet) {
    return this.set.every(element => !otherSet.set.includes(element));
  }

  isEmpty() {
    return this.set.length === 0;
  }

  isSame(otherSet) {
    return this.isSubset(otherSet) && this.set.length === otherSet.set.length;
  }

  isSubset(otherSet) {
    return this.set.every(element => otherSet.set.includes(element));
  }

  isUnique(array) {
    const results = [];

    array.forEach(element => {
      if (!results.includes(element)) results.push(element);
    });

    return results;
  }

  union(otherSet) {
    const unionSet = new CustomSet(this.set);
    otherSet.set.forEach(element => unionSet.add(element));
    return unionSet;
  }
}

module.exports = CustomSet;
