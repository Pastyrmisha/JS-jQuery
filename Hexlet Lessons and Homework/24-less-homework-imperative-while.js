const smallestDivisor = (n) => {
    let counter = 2;
    if (n < 1) {
      return NaN;
    }
    if (n === 1) {
      return n;
    }
    while (n % counter !== 0) {
      counter = counter + 1;
    }
    return counter;
  };
console.log(smallestDivisor(15));