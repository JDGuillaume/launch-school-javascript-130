class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];
    if (this.isInvalid()) throw new Error(`That's illegal!`);
  }

  kind() {
    let [side1, side2, side3] = this.sides;

    if (side1 === side2 && side2 === side3) {
      return 'equilateral';
    } else if (
      (side1 === side2 && side1 !== side3) ||
      (side2 === side3 && side2 !== side1) ||
      (side1 === side3 && side1 !== side2)
    ) {
      return 'isosceles';
    } else return 'scalene';
  }

  isInvalid() {
    let [side1, side2, side3] = this.sides;

    return (
      side1 + side2 < side3 ||
      side1 + side3 < side2 ||
      side2 + side3 < side1 ||
      side1 <= 0 ||
      side2 <= 0 ||
      side3 <= 0
    );
  }
}

module.exports = Triangle;
