const smallestDivisor = (n) => {
    let counter = 2;
    let result = 1;
  
    if (n < 1) {
      return NaN;
    }
    if (n === 1) {
      return result;
    }
    while (n % counter !== 0) {
      result = n / counter;
      counter = counter + 1;
    }
    return counter;
  };
console.log(smallestDivisor(15));