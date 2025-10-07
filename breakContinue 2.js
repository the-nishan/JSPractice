//break number
/* let funcBreak = (set) => {
  let i = 0;
  let result = [];
  while (i < set.length) {
    if (set[i] === 6) {
      break;
    }
    result.push(set[i]);
    i++;
  }
  return result;
};
console.log(funcBreak([5, 4, 9, 6, 2, 7, 1, 4, 6, 9])); */


//mobile example
/* let funcMobile = (word) => {
    i=0;
    finalResult=[];

    while(i<word.length) {
if(word[i] === "b" || word[i] === "B") {
    break;
}
finalResult.push(word[i]);
i++;

    }
    return finalResult;
}
console.log(funcMobile("mobile")); */


//refine even numbers
/* let funcSkipEven = (nums) => {
let i = 0;
let evens = [];

while(i<nums.length) {
    if(nums[i]%2 !== 0) {
      i++;
        continue;
    }
    evens.push(nums[i]);
    i++;
}
return evens;
}
console.log(funcSkipEven([1,2,3,4,5,6,7,8,9,0])); */

//skip negative numbers
let funcSkipNeg = (nums) => {
  let i=0;
  let positives=[];

  while(i<nums.length) {
    if(nums[i]<0) {
      i++;
      continue;
    }
    positives.push(nums[i]);
    i++;
  }
  return positives;
}
console.log(funcSkipNeg([3, -1, 7, -9, 5, -2]));