//reverse
/* let revString = (word) => {
  return word
  .split("")
  .reverse()
  .join("");
};
console.log(revString("redmi")); */

//panlindrome
/* let palindromeCheck = (word) => {
  let revWord = [];
  word
  .split("")
  .reverse()
  .join("");
  revWord.push(word);
  return revWord;
};
console.log(palindromeCheck("abc")); */

//find vowels
/* let funcCountVowels = (word) => {
  let vowels = [];
for(let i=0;i<word.length;i++) {
if(word[i] === "a" || word[i] === "e" || word[i] === "i" ||
  word[i] === "o" || word[i] === "u") {
    vowels.push(word[i]);
  }
}


  return(vowels);
}
console.log(funcCountVowels("paper")); */

//count vowels
/* let funcCountVowels = (word) => {
  let vowelCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      vowelCount++;
    }
  }

  return vowelCount;
};
console.log(funcCountVowels("paper")); */

//find maximum
/* let findTheMaximumValueFromArray = (set) => {

} */

//funcCountEvenNumber.  normal
/* funcCountEvenNumber = (set) => {
  let evens = 0;

  for (let i = 0; i < set.length; i++) {
    if (set[i] % 2 === 0) {
      evens++;
    }
  }
  return evens;
};
console.log(funcCountEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); */

//funcFindEvenNumber.  normal
/* funcFindEvenNumber = (set) => {
  let evens = [];

  for (let i = 0; i < set.length; i++) {
    if (set[i] % 2 === 0) {
      evens.push(set[i]);
    }
  }
  return evens;
};
console.log(funcFindEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); */


//funcFindEvenNumber.  Break/Continue
/* let funcFindEvenNumber = (set) => {
let range = [];
  for(let i=0;i<set.length;i++) {
    if (set[i]%2 !== 0) {
     continue;
  }
  range.push(set[i]);
}
return range;
}
console.log(funcFindEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); */



//find factorial

/* let funcFactorial = number => {
let Factorial = 1;
for(let i=1; i<=number;i++) {
    Factorial *=i;
}
    return Factorial;
}
console.log(funcFactorial(5)); */



//find longest word
// let funcFindLongestWord = (sentence) => {
//   let splitSentence = sentence.split(" ");
//   let longest =[];

//   for(let currentWord of splitSentence) {
// if(currentWord.length > longest.length) {
//   longest=currentWord;
// }

//   }

//   return longest;
// }
// console.log(funcFindLongestWord("amar sonar bangla"));


// 
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let mergeAnArraySortAccendingRemoveDuplicate=()=>{
let mergedNewArray=arr1.concat(arr2);
let finalArray=[...new Set(mergedNewArray.sort((a,b)=>a-b))];

return finalArray;
}
console.log(mergeAnArraySortAcendingRemoveDuplicate());