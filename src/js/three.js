
const isPrime = (value) => {
  if (!isPrime.answers) {
    isPrime.answers = {};
  }

  if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value];
  }

  var prime = value !== 1;

  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return isPrime.answers[value] = prime;
};

const mySort = (arr) => {
  return arr.sort((value1, value2) => value1 - value2);
};

// export { isPrime }
module.exports = {
  isPrime: isPrime,
  mySort: mySort
};