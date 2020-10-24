const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();

const countWord = (sentance) => {
    let result = '';
    for (let i = 0; i < length(sentance); i += 1) {
      if (sentance[i - 1] === ' ' || i === 0) {
        result += toUpperCase(sentance[i]);
      }
      if (sentance[i - 1] !== ' ' && i > 0) {
        result += sentance[i];
      }
    }
    return result;
  };

console.log(countWord('hello     hello     hello'));


// Teacher:
// // BEGIN
// export default (str) => {
//     let result = '';
//     for (let i = 0; i < length(str); i += 1) {
//       const shouldBeBig = (i === 0 || str[i - 1] === ' ');
//       result += shouldBeBig ? toUpperCase(str[i]) : str[i];
//     }
  
//     return result;
//   };
//   // END