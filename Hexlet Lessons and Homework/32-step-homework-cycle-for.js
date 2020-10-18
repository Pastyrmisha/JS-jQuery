const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  };
  console.log(isPrime(21));