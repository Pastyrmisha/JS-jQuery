const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();


const capitalizeWord = (sentance) => {
    let result = "";
    for (let i = 0; i < length(sentance); i += 1) {
        result += sentance[i];
        
    }
    return result;
}

console.log(capitalizeWord(Hello));