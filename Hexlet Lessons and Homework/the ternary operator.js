// const buildUrl = (urlPage, domainName) => {
//   let urlConstruction;
// if (urlPage.startsWith('/')) {
//   urlConstruction = `https://${domainName}${urlPage}`;
// }
// else {
//   urlConstruction = `https://${domainName}/${urlPage}`;
// }
// return urlConstruction;
// }

// console.log(buildUrl('', 'hexlet.io'))

// const whoIsThisHouseToStarks = (secondName) => {
//   if (secondName === 'Karstark' || secondName === 'Tally') {
//     return 'friend';
//   } else if (secondName === 'Lannister' || secondName === 'Frey') {
//     return 'enemy';
//   }
//     return 'neutral';
// };

// console.log(whoIsThisHouseToStarks('Alex'))

const convertText = (sentence) => {
    const upperChar = sentence[0];
    if (sentence.length === 0) {
      return "";
    }
  
    return sentence[0] !== upperChar.toUpperCase()
      ? sentence.split("").reverse().join("")
      : sentence;
  };
  console.log(convertText("hey"));