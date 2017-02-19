
import { assert } from './assert';

function oldSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    arguments[i] = 8;
    sum += arguments[i];
  }
  return sum;
}

const newSum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

function infiltrate(person) {
  assert(person === 'gardener', 'The person is a gardener');
  assert(arguments[0] === 'gardener', 'The person is a gardener');

  arguments[0] = 'ninja';

  assert(arguments[0] === 'ninja', 'The first argument is now a ninja');
  assert(person === 'gardener', 'The person is still a gardener');

}

function ninja() {
  return this;
}

const ninja1 = {
  getMyThis: ninja
};

const getMyThis = () => {
  assert(ninja1.getMyThis() === ninja1, "Working with 2nd ninja");
};

const puppet = {
  rules: false
};

function Emperor() {
  this.rules = true;
  return puppet;
}

function useEmperor() {
  let emperor = new Emperor();

  assert(emperor === puppet, "The emperor is merely a puppet!");
  assert(emperor.rules === false, "The puppet does not know how to rule!");
}

const forEach = (list, callback) => {
  for (let i = 0, l = list.length; i < l; i++) {
    callback.call(list[i], i);
  }
};

export { oldSum, newSum, infiltrate, ninja, getMyThis, useEmperor, forEach };