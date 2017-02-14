
console.log("start");

import { assert, showSeparateLine } from './js/assert';
//import { isprime } from './js/three';
let three = require('./js/three');

showSeparateLine('3-3');

assert(three.isPrime(5), "5 is prime!");
assert(three.isPrime.answers[5], "The answers was cached!");
assert(three.isPrime(111111111111), "111111111111 is prime!");
assert(three.isPrime(11), "11 is prime!");

assert((three.mySort([5, 3, 7, 1, 76, 3]))[0] === 1, "sort is ok!");
assert((three.mySort([5, 3, 7, 1, 76, 3]))[5] === 76, "sort is ok!");

showSeparateLine();
assert(false, "Fail!");
