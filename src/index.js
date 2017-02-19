
console.log("start");

import { assert, showSeparateLine } from './js/assert';
//import { isprime } from './js/three';
let three = require('./js/three');

import * as four from './js/four';

showSeparateLine('3-3');

assert(three.isPrime(5), "5 is prime!");
assert(three.isPrime.answers[5], "The answers was cached!");
assert(three.isPrime(111111111111), "111111111111 is prime!");
assert(three.isPrime(11), "11 is prime!");

assert((three.mySort([5, 3, 7, 1, 76, 3]))[0] === 1, "sort is ok!");
assert((three.mySort([5, 3, 7, 1, 76, 3]))[5] === 76, "sort is ok!");

showSeparateLine('3-7');
assert(three.multiMax(6, 9, 7, 1, 99, 8, 4) === 594, "6*99=594 (First arg, by largest.)");

showSeparateLine('4-2');
assert(four.oldSum(1, 2) === 3, "We can add two numbers");
assert(four.oldSum(1, 2, 3) === 6, "We can add three numbers");
assert(four.oldSum(1, 2, 3, 4) === 10, "We can add four numbers");

assert(four.newSum(1, 2) === 3, "We can add two numbers");
assert(four.newSum(1, 2, 3) === 6, "We can add three numbers");
assert(four.newSum(1, 2, 3, 4) === 10, "We can add four numbers");

showSeparateLine('4-4');
four.infiltrate("gardener");

showSeparateLine('4-5');
function ninja() {
  return this;
}
assert(ninja() === window, "In a 'nonstrict' ninja function, the context is the global window object");
assert(ninja() === undefined, "In a 'strict' ninja function, the context is undefined");

showSeparateLine('4-6');
four.getMyThis();

showSeparateLine('4-9');
four.useEmperor();

showSeparateLine('4-12');
const weapons = [
  { type: 'shuriken' },
  { type: 'katana' },
  { type: 'nunchucks' }
];
four.forEach(weapons, function (idx) {
  assert(this === weapons[idx], "Got the expected value of " + weapons[idx].type);
});

showSeparateLine('4-13');
function Button() {
  this.clicked = false;
  this.click = function () {
    this.clicked = true;
    assert(button.clicked, "The button has been clicked");
  };
  this.click2 = () => {
    this.clicked = true;
    assert(button.clicked, "The button has been clicked");
  }
}
const button = new Button();
const elem = document.getElementById('test');
elem.addEventListener('click', button.click2);

showSeparateLine('4-14');
assert(this === window, "this === window");
console.log(this);
const button2 = {
  clicked: false,
  click2: () => {
    this.clicked = true;
    assert(button2.clicked, "The button2 has been clicked");
    assert(this === window, "In arrow function this === window");
    assert(window.clicked, "clicked is stored in window");
  }
};
elem.addEventListener('click', button2.click2);
