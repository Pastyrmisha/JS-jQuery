// factorial function cycle "for" syntax:

// const factorial = (n) => {
//     let result  = 1;
  
//     for (let counter = 1; counter <= n; counter++) {
//       result *= counter;
//     }
  
//     return result;
//   };

// console.log(factorial(5));



  // factorial function cycle switch syntax:

let answer;
let num = 3;

// if (num === 1) {
//   answer = "One";
// } else if (num === 2) {
//   answer = "Two";
// } else {
//   answer = "Nothing";
// }

switch (num) {
  case 1: // if (num === 1)
    answer = "One";
    break;

  case 2: // if (num === 2)
    answer = "Two";
    break;

  default:
    answer = "Nothing";
    break;
}

// OR

// switch(num) {
//     case 1:  // if (num === 1)
//       answer = "One";
//       break;
  
//     case 2:  // if (num === 2)
//     case 3:  // if (num === 3)
//     case 4:  // if (num === 4)
//       answer = "Two to four";
//       break;
  
//     default:
//       answer = "Nothing";
//       break;
//   }

console.log(answer);

// another variation cycle "for":

// let counter = 1;
// for (; counter <= n; counter++) {
//   // любой код
// }

// OR

// let counter  = 1;
// for (;;) {
//   if (counter <= n) break;
//   // любой код
//   counter++;
// }

// OR

// at 1 to n function:

// const sum = (n) => {
//     let result = 0;

//     for (let counter = 0; counter <= n; counter++) {
      
  
//       result += counter;
//     }
  
//     return result;
//   }
  
 

// console.log(sum(7)); 