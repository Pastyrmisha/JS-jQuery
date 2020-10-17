const smallestDivisor = (num) => {


  if (num === 1) {
    return 1;
  }

  const iter = (acc, counter) => {
    if (acc % counter === 0 || counter === acc) {
      return counter;
    }

    return iter(acc, counter + 1);
  };
  return iter(num, 2);


};

console.log(smallestDivisor(15));