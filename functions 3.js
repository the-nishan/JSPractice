// let car ={
//     brand: "toyota",
//     model: "x2",
//     year: 1999,
// }

// car.condition = "New";
// delete car.model;


// console.log(car);


// let vegetabls= {name:"potato", taste:"good", fat:"yes"};

// for(let key in vegetabls){
//     console.log(key+ ":"+ vegetabls[key]);
// }

// testFunction = (obj) => {
//     for(let key in obj){
//         console.log(key + ":" + obj[key])
//     }
// }

// let car= {
// brand: "toyota",
//     model: "x2",
//     year: 1999,
// }

// testFunction(car);


// let numbers = [2,5,8,33,7];

// let doubled = numbers.map(
//     numbers => numbers*2
// )
// console.log(doubled);

/*  let numbers = [2,5,8,33,7];
doubled = (numbers) => {
    numbers.map(
      numbers= numbers*2
    )
}

console.log(doubled(numbers));  */

// let num = [2,3,8,7,5,6,,3];

// let result = num
// .filter(num => num%2 !==0)
// .map(num => num*2);

// console.log(result);


//practice on reduce

/* let arr = [10, 99, 33, 45];

funcMin = (anhar, afraj) => {
 return Math.min(anhar, afraj);
}

let getMin = arr.reduce(funcMin);
console.log(getMin); */

/* let arr = [2, 4, 6, 8];

funcSum = (alu, dim) => {
  return alu+dim;
}

getSum = arr.reduce(funcSum);
console.log(getSum); */

/* let arr = [3,6,7,9,3];


let getSum = arr.reduce((accu, ele) => {
  return accu + ele;
});
console.log(getSum);
 */



/* function calc(num1,num2,oper="add") {

switch (oper) {
  case "add":
    return num1+num2;
    break;
    case "minus":
    return num1-num2;
    break;
    default:
      return "N/A"
}

}
console.log(calc(10,5)); */


/* let arr = ["a", "b", "c", "d"];

revArr = (arr) => {
arr.reverse();
  return arr;
}
console.log(revArr(arr)); */


let notDevByThree = (num) => {
  let i = 0;
  let final = [];

  while(i<num.length) {
    if(num[i]%3 !==0) {
      i++;
      continue;
    }
    final.push(num[i]);
    i++;
  }
  return final;
}
console.log(notDevByThree([4, 6, 8, 3,9, 0, 1]));