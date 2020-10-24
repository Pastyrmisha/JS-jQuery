// // function reverse



// const rev = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i += 1) {
//         result = str[i] + result;
//     }
//     return result;
// };


// const rev = (str) => {
//     let result = str.split('').reverse().join('');
//     return result;
//  };

// console.log(rev('Hello!'));


const mod = (text) => {
    text = prompt('Введите Ваши данные');
    
if (text === '' || text === null) {
    return mod();
} 

let res = '';

for (let j = 0; j < text.length; j += 1) {
    if (text[j - 1] === '|' || j === 0) {
    res += text[j].toUpperCase();

    }else {
    res += text[j].toUpperCase();
}
}
console.log(res);

text = text.split('|')








let result = '';

for (let i = 0; i < text.length; i += 1) {


    result += `${text[i]}</br>`;


}

return document.write(result);


};
mod();

