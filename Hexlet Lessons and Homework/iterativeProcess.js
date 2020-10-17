const factorial = (n) => {
    if (n === 0) {
      return 1;
    }
  
    const iter = (counter, acc) => {
      if (counter === 1) {
        return acc;
      }
      return iter(counter - 1, counter * acc);
    };
  
    return iter(n, 1);
  };
  
  console.log(factorial(5));
  