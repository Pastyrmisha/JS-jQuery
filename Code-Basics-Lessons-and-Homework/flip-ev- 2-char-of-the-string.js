const encrypt = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0 && i !== str.length - 1) {
            result += str[i + 1];
        } else if (i % 2 > 0 && i !== str.length) {
            result += str[i - 1];
        } else {
            result += str[i];
        }
    }
    return result;
};
console.log(encrypt("attack!")); //taatkc! 