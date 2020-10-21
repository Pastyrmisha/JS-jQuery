// Environment

const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();

const bigLettersCount = (str) => {
    let result = "";

    for (let char = 0; char < length(str); char += 1) {
        if (str[char] === str[char].toUpperCase()) {
            result += toUpperCase(str[char]);
        }
        result += "";
    }
    return length(result);
};

const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);

    if (firstCount > secondCount) {
        return 1;
    }
    if (firstCount < secondCount) {
        return -1;
    }
    return 0;
};

console.log(compare("AD", "Ad sd"));