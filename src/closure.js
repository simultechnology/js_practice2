
console.log("start");

import { assert, showSeparateLine } from './js/assert';
//import { isprime } from './js/three';

import * as five from './js/five';

showSeparateLine('5-3');

const firstNinja = new five.FirstNinja();
firstNinja.feint();

assert(firstNinja.feints === undefined, "And the provate data is inaccessbile to us.");
assert(firstNinja.getFeints() === 1, "We're able to access the internal feint count.");

const firstNinja2 = new five.FirstNinja();
assert(firstNinja2.getFeints() === 0, "The second ninja object gets its own feints variable.");

showSeparateLine('5-4');
five.animateIt("box1");