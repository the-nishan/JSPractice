/* let arr = [4, 989, 3, 765, 9984, 293, 656, 239];

max = (accumulator, element) => {
  return Math.max(accumulator, element);
};
let maximum = arr.reduce(max);
console.log(maximum); */

// example 1= sum of array elements

/*  let arr1 = [1, 2, 3, 4, 5];
let sum = (accu, ele) => {
    return (accu + ele);
}

let summation = arr1.reduce(sum);
console.log(summation); */

/* //example 2 = product of array

let arr2 = [2, 7, 0.000001];

funcProduct = (acc, ele) => {
    return acc * ele;
};

let getProduct = arr2.reduce(funcProduct);
console.log(getProduct); */



// example 3 = count element of array

let numbers = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

funcCount = (acc, ele) => {
    acc[ele] = (acc[ele] || 0) +1;
    return acc;
}

let getCount = numbers.reduce(funcCount ,{});
console.log(getCount);