const length = (str) => str.length;


const finishSummary = (num) => {
    const numSummary = () => {
      const str = String(num);
      let result = 0;
      let i = 0;
  
      while (i < length(str)) {
        result += Number(str[i]);
        i += 1;
      }
      return result;
    };
    while (length(String(numSummary(num))) > 1) {
      num = numSummary(num);
    }
    return numSummary(num);
  };
  export default finishSummary;

  

// Teacher:

//   const sumDigits = (num) => {
//     const str = String(num);
//     let result = 0;
//     for (let i = 0; i < length(str); i += 1) {
//       result += Number(str[i]);
//     }
  
//     return result;
//   };
  
//   const addDigits = (num) => {
//     let result = num;
//     while (result >= 10) {
//       result = sumDigits(result);
//     }
  
//     return result;
//   };
  
//   export default addDigits;