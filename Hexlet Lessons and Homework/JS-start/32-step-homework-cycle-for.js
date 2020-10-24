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

//   function isPrime(n) {
//     if (n < 2) return false;
//     else if (n === 2) return true;
//     for (let i=2; i<11; i++){
//         if(i===n-1) return true;
//         if(n%i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(21));