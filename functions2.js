//ex-1 convert to integer
let string = "654763xyz";
let result = parseInt(string);

console.log(result);

// ex-2 ternary operators

compareDigits = (a,b) => {
    return a === b ? true : false;
}
console.log(compareDigits(5,4));

// ex-3 ternary operators(largest of 2 numbers)

largestNumbers = (a,b) => {
    return a>b ? a : b;
}
console.log(largestNumbers(100,8));


// ex-4 ternary operators(number check)

numCheck = (num) => {
    return num>0 ? "positive" : num<0 ? "negetive" : "zero";
}
console.log(numCheck(100));