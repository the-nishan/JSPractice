/* let list = ["shirt", "pant", "panjabi", "perfume", "shoe", "smartwatch"];
let newList = [];

list.forEach((printItems) => {
  newList.push(printItems);
});
console.log(newList); */


/* 
let list = ["shirt", "pant", "panjabi", "perfume", "shoe", "smartwatch"];
// let newList = [];

list.forEach((item, index) => {
  // newList.push(item, index);
  console.log(item, index);
}); */

let object = {
  name: "anhar",
  age: 7,
  location: "dhaka"
};


for(let key in object) {
  console.log(object[key]);
}