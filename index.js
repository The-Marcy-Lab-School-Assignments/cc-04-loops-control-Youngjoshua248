//Write your solutions in this file, don't forget to test your functions.
const countFromOne = (nn) => {
  for (let j = 1; j <= nn; j += 1) {
    console.log(j);
  }
};
countFromOne(50);

const countEveryOdd = (nn) => {
  for (let j = 1; j <= nn; j++) {
    if (j % 2 !== 0) {
      console.log(j);
    }
  }
};
countEveryOdd(15);

const isNegative = (j) => {
  if (j < 0) {
    return true;
  } else {
    return false;
  }
};
isNegative(-3);
console.log(isNegative(-3));

const betweenFiveAndTwenty = (j) => {
  if ((j) => 5 && j <= 20) {
    return true;
  } else {
    return false;
  }
};
console.log(betweenFiveAndTwenty(12));

const sumOfThreeOrFive = (j) => {
  let sum = 0;
  for (let j = 1; j < 1000; j++) {
    if (j % 3 === 0 || j % 5 === 0) {
      sum += j;
      console.log(j);
    }
  }
  return sum;
};

console.log(sumOfThreeOrFive());

const isAllLowerCase = (str) => {
  if (str.toLowerCase() === str) {
    return true;
  } else {
    return false;
  }
};
