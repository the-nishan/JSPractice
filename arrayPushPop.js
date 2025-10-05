/* const arrayOfFruits = ["apple","banana"];


arrayOfFruits.push("orange");
arrayOfFruits.pop() // pop last one.

console.log(arrayOfFruits); */

/* let names = ["rohim", "korim", "zodu", "modhu"];

names.push("abul", "salam");
let removed = names.pop();
console.log(names);
console.log(removed); */

/* let numbers = [1, 2, 3];
numbers.push(4,5,6);
console.log(numbers); */


//reverse array with push pop
let numbers = [1, 2, 3, 4];
let newRevArr = [];

funcRevArr = (numbers) => {
  for (let i = numbers.length - 1; i >= 0; i--) {
    let removed = numbers.pop();
    newRevArr.push(removed);
  }
  return newRevArr;
};
console.log(funcRevArr(numbers));