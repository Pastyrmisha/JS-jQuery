// Declarative and Imperative programming


// Declarative
const recursiveFactorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}


// Imperative
const factorial = (n) => {
    let counter = 1;
    let result = 1;

    while (counter <= n) {
        result = result * counter;
        counter = counter + 1;
    }

    return result;
}