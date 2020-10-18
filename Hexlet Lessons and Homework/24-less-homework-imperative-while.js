const smallestDivisor = (n) => {
    let counter = 1;
    let result = 1;
    if (n < 1) {
      return Nan;
    }
    
    while (counter <= n) {
      result = n / counter;
      counter = counter + 1;
    }
    return result;
  }
  console.log(smallestDivisor(15));