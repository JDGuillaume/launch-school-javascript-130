/* eslint-disable no-mixed-operators */
/* eslint-disable max-lines-per-function */
// eslint-disable-next-line max-lines-per-function
function getRandomIntBetweenTwoNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function anonymize() {
  return (function() {
    const availableCharacters =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const lengthOfDisplayName = 16;

    const displayNameArray = [];
    for (
      let charactersReamining = lengthOfDisplayName;
      charactersReamining > 0;
      charactersReamining--
    ) {
      let randomIndex = getRandomIntBetweenTwoNumbers(
        0,
        availableCharacters.length
      );
      displayNameArray.push(availableCharacters[randomIndex]);
    }

    return displayNameArray.join('');
  })();
}

const Account = {
  init(mail, password, first, last) {
    this.mail = mail;
    this.password = password;
    this.first = first;
    this.last = last;
    this.displayName = anonymize();
    return this;
  },

  reanonymize(password) {
    if (password === this.password) {
      this.displayName = anonymize();
      return true;
    } else return 'Invalid Password';
  },

  resetPassword(oldPassword, newPassword) {
    if (oldPassword === this.password) {
      this.password = newPassword;
      return true;
    } else return 'Invalid Password';
  },

  firstName(password) {
    if (password === this.password) {
      return this.first;
    } else return 'Invalid Password';
  },

  lastName(password) {
    if (password === this.password) {
      return this.last;
    } else return 'Invalid Password';
  },

  email(password) {
    if (password === this.password) {
      return this.mail;
    } else return 'Invalid Password';
  },
};

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName('123456')); // logs 'foo'
console.log(fooBar.firstName('abc')); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc')); // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc')); // returns true
console.log(displayName === fooBar.displayName); // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc')); // logs 'Invalid Password'
console.log(fooBar.email('abc'));
