const length = (str) => str.length;

let num = 598997686567;

const numSummary = (num) => {
    num = String(num);
    let result = 0;
    let i = 0;

    while (i < length(num)) {
        result += Number(num[i]);
        i += 1;
    }
    return result;
};


let finishNumSummary = numSummary(num);



if (length(String(finishNumSummary)) > 1) {
  num = numSummary(num);

}


console.log(numSummary(num));




