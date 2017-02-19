
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

const multiMax = (first, ...remainingNumbers) => {
  const sorted = remainingNumbers.sort((a, b) => b - a);
  return first * sorted[0];
};

// export { isPrime }
module.exports = {
  isPrime: isPrime,
  mySort: mySort,
  multiMax: multiMax
};