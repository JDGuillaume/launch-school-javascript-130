class Robot {
  constructor() {
    this.id = this._generateName();
  }

  static ROBOT_TRACKER = [];

  _generateName() {
    const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const NUMBERS = '0123456789';

    let name = '';

    name += LETTERS[this.generateRandomIndex(0, LETTERS.length)];
    name += LETTERS[this.generateRandomIndex(0, LETTERS.length)];
    name += NUMBERS[this.generateRandomIndex(0, NUMBERS.length)];
    name += NUMBERS[this.generateRandomIndex(0, NUMBERS.length)];
    name += NUMBERS[this.generateRandomIndex(0, NUMBERS.length)];

    if (Robot.ROBOT_TRACKER.includes(name)) {
      this.reset();
      return this.id;
    } else {
      Robot.ROBOT_TRACKER.push(name);
      return name;
    }
  }

  generateRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  name() {
    return this.id;
  }

  reset() {
    this.id = this._generateName();
  }
}

module.exports = Robot;
