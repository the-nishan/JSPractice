//1
/* let value = 1;

while (value<=5) {
    console.log(value);
     value++;
}; */


//2
/* let fruits = ["apple", "banana", "mango"];

for(let furut of fruits) {
    console.log(furut);
} */

//3
/* et word = "HELLO";

for(let characters of word) {
    console.log(characters);
}; */


//4

/* let student = { 
    name: "Rafi", 
    age: 22, 
    city: "Dhaka",
};

for(let hhh in student) {
    console.log(hhh , ":" , student[hhh]);
} */


//5
let nums = [10, 20, 30, 40];
let i = 0;
let sum = 0;

funcGetSum = (nums) => {
    while(i<nums.length) {
        sum+=nums[i];
        i++;
    }
    return sum;
}
console.log(funcGetSum(nums));