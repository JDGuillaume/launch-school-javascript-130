function placeholder(first, string2, string3, string4, last) {
  return {
    first,
    last,
    middle: [string2, string3, string4].sort(),
  };
}

let words = ['one', 'two', 'three', 'four', 'five'];
let {first, last, middle} = placeholder(...words);
