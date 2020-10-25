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



// function hello|world|word => Hello
//                              World
//                              Word

// const mod = (text) => {
//     text = prompt('Введите Ваши данные');
//     if (text === '' || text === null || text.indexOf('|') == -1) {
//         return mod();
//     }
//     if (text.lastIndexOf('|') === text.length - 1) {
//         text = text.substring(0, text.length - 1);
//     }
//     let res = '';
//     for (let j = 0; j < text.length; j += 1) {
//         if (text[j - 1] === '|' || j === 0) {
//             res += text[j].toUpperCase();
//         }else{
//             res += text[j];
//         }
//     }
//     res = res.split('|')
//     let result = '';
//     for (let i = 0; i < res.length; i += 1) {
//         result += `${res[i]}</br>`;
//     }
    
//     return document.write(result);
// };
// mod();


// variation

 let text = prompt('Введите Ваши данные');

 while (!text || text == null || text.indexOf('|') == -1);

    if (text.lastIndexOf('|') === text.length - 1) {
        text = text.substring(0, text.lastIndexOf('|'));
    }
let result = text.split('|');

    for (let i = 0; i < result.length; i += 1) {
        document.write(result[i] + '</br>');
    } 