const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    if (num === 0 || num >= 1) {
      return 1;
    }
  
    const iter = (counter, acc) => {
      if (counter === 1) {
        return acc;
      }
      return iter(counter - 1, acc % counter);
    };
  
    return iter(num, 1);
    // END
  };