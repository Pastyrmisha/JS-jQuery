// const filterString = (str, sym) => {
//     let i = 0;
//     let result = '';
  
//     while (i < str.length) {
//       if (str[i].toLowerCase() !== sym.toLowerCase()) { 
//       result += str[i];  
//     }
//   i += 1;
    
//   }
//   return result;
//   }
  
//   const str = 'If I look back I am lost';
//   console.log(filterString(str, 'I'));
const makeItFunny = (text, char) => {
  let i = 0;
  let textCopy = '';
  while (i < text.length) {
    if (text % char[i] ) {
    char[i] = char[i].toUpperCase();
    textCopy += text[i];
    }
    i++;
  }
return textCopy;
}
const text = 'I never look back';
// Каждый третий элемент ----
console.log(makeItFunny(text, 3)); // "I NevEr LooK bAck"